#!/bin/bash

# S3 Deployment Script for Zilionix Website
# Make sure to configure AWS CLI first: aws configure

# Variables - Update these with your S3 bucket details
BUCKET_NAME="zilionix.com"
REGION="us-east-1"
CLOUDFRONT_DISTRIBUTION_ID="E2MTHICDL77VB0"  # Optional: Add if using CloudFront

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment to S3...${NC}"

# Check if bucket name is set
if [ "$BUCKET_NAME" = "your-bucket-name" ]; then
    echo -e "${RED}Error: Please update BUCKET_NAME in this script${NC}"
    exit 1
fi

# Build the project
echo -e "${YELLOW}Building the project...${NC}"
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Please fix errors and try again.${NC}"
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}Error: 'out' directory not found. Build may have failed.${NC}"
    exit 1
fi

# Sync to S3
echo -e "${YELLOW}Uploading to S3 bucket: $BUCKET_NAME${NC}"
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML files with shorter cache
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=3600" \
    --exclude "*" \
    --include "*.html" \
    --include "*.json"

# Check if sync was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Successfully deployed to S3!${NC}"
    echo -e "${GREEN}Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com${NC}"
else
    echo -e "${RED}Deployment failed. Please check your AWS credentials and permissions.${NC}"
    exit 1
fi

# Invalidate CloudFront cache if distribution ID is set
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
    echo -e "${GREEN}CloudFront cache invalidated!${NC}"
fi

echo -e "${GREEN}Deployment complete!${NC}"
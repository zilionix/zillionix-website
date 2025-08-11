# S3 Deployment Guide for Zilionix Website

This guide will help you deploy the Zilionix website to AWS S3 for static hosting.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Install and configure AWS CLI
   ```bash
   # Install AWS CLI (macOS)
   brew install awscli
   
   # Configure AWS CLI with your credentials
   aws configure
   ```

## Step 1: Create S3 Bucket

1. Go to AWS S3 Console
2. Click "Create bucket"
3. Configure bucket:
   - **Bucket name**: `zilionix-website` (or your preferred name)
   - **Region**: Choose your preferred region
   - **Uncheck** "Block all public access"
   - Acknowledge that the bucket will be public

## Step 2: Enable Static Website Hosting

1. Go to your bucket → Properties tab
2. Scroll to "Static website hosting"
3. Click "Edit" and enable it:
   - **Index document**: `index.html`
   - **Error document**: `404.html`
4. Save changes

## Step 3: Set Bucket Policy

1. Go to Permissions tab → Bucket Policy
2. Add this policy (replace `your-bucket-name` with your actual bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

## Step 4: Deploy to S3

### Option 1: Using the deployment script

1. Update the variables in `deploy-s3.sh`:
   ```bash
   BUCKET_NAME="your-bucket-name"
   REGION="your-region"
   ```

2. Make the script executable:
   ```bash
   chmod +x deploy-s3.sh
   ```

3. Run the deployment:
   ```bash
   ./deploy-s3.sh
   ```

### Option 2: Manual deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload to S3:
   ```bash
   aws s3 sync out/ s3://your-bucket-name/ --delete
   ```

## Step 5: Access Your Website

Your website will be available at:
```
http://your-bucket-name.s3-website-region.amazonaws.com
```

## Optional: CloudFront CDN Setup

For better performance and HTTPS support:

1. Create a CloudFront distribution
2. Set your S3 bucket as the origin
3. Configure settings:
   - **Origin Domain**: Your S3 website endpoint
   - **Viewer Protocol Policy**: Redirect HTTP to HTTPS
   - **Default Root Object**: index.html

4. Update `deploy-s3.sh` with your CloudFront distribution ID

## Build Configuration Details

The project is configured for static export with:

- **next.config.js**:
  - `output: 'export'` - Enables static HTML export
  - `trailingSlash: true` - Adds trailing slashes for S3 compatibility
  - `images.unoptimized: true` - Disables Next.js image optimization (not available in static export)

## Troubleshooting

### 404 Errors on Routes
- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that all routes have corresponding HTML files in the `out` folder

### Images Not Loading
- Verify all images are using static imports
- Check S3 bucket permissions

### Build Errors
- Run `npm run build` locally first
- Check for any dynamic features that aren't compatible with static export

## CI/CD Integration

You can automate deployments using GitHub Actions:

1. Add AWS credentials as GitHub secrets
2. Create `.github/workflows/deploy.yml`
3. Configure to run on push to main branch

## Costs

- **S3 Storage**: ~$0.023 per GB per month
- **S3 Requests**: ~$0.0004 per 1,000 GET requests
- **CloudFront** (optional): ~$0.085 per GB transferred

## Support

For issues or questions about deployment, please check:
- AWS S3 Static Website Hosting documentation
- Next.js Static Export documentation
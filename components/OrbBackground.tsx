"use client"

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import to prevent SSR issues with WebGL
const Orb = dynamic(() => import('./Orb'), { ssr: false });

interface OrbConfig {
  id: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  size: { width: string; height: string };
  hue: number;
  hoverIntensity: number;
  rotateOnHover: boolean;
  forceHoverState?: boolean;
  opacity?: number;
  blur?: number;
  animation?: string;
}

interface OrbBackgroundProps {
  theme?: 'purple' | 'blue' | 'green' | 'gradient';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export default function OrbBackground({ 
  theme = 'purple', 
  intensity = 'medium',
  interactive = true 
}: OrbBackgroundProps) {
  const orbConfigs: OrbConfig[] = useMemo(() => {
    const baseConfigs: OrbConfig[] = [];
    
    // Theme-based hue values
    const hueMap = {
      purple: 280,
      blue: 220,
      green: 140,
      gradient: 0
    };
    
    const baseHue = hueMap[theme];
    
    // Intensity-based configurations
    if (intensity === 'high' || intensity === 'medium') {
      // Primary large orb - top left
      baseConfigs.push({
        id: 'orb-1',
        position: { top: '10%', left: '10%' },
        size: { width: '600px', height: '600px' },
        hue: baseHue,
        hoverIntensity: interactive ? 0.3 : 0,
        rotateOnHover: interactive,
        opacity: 1,
        blur: 0,
        animation: 'float-slow'
      });
      
      // Secondary orb - top right
      baseConfigs.push({
        id: 'orb-2',
        position: { top: '10%', right: '10%' },
        size: { width: '500px', height: '500px' },
        hue: theme === 'gradient' ? baseHue + 60 : baseHue + 20,
        hoverIntensity: interactive ? 0.2 : 0,
        rotateOnHover: interactive,
        opacity: 0.8,
        blur: 0,
        animation: 'float-reverse'
      });
    }
    
    if (intensity === 'high') {
      // Additional orb - bottom left
      baseConfigs.push({
        id: 'orb-3',
        position: { bottom: '-5%', left: '20%' },
        size: { width: '400px', height: '400px' },
        hue: theme === 'gradient' ? baseHue + 120 : baseHue - 20,
        hoverIntensity: interactive ? 0.25 : 0,
        rotateOnHover: interactive,
        opacity: 0.5,
        blur: 2,
        animation: 'float-medium'
      });
      
      // Small accent orb - center
      baseConfigs.push({
        id: 'orb-4',
        position: { top: '40%', left: '35%' },
        size: { width: '300px', height: '300px' },
        hue: theme === 'gradient' ? baseHue + 180 : baseHue,
        hoverIntensity: interactive ? 0.4 : 0,
        rotateOnHover: interactive,
        forceHoverState: false,
        opacity: 0.4,
        blur: 1,
        animation: 'pulse-glow'
      });
    }
    
    if (intensity === 'medium') {
      // Medium intensity - one more orb
      baseConfigs.push({
        id: 'orb-3',
        position: { bottom: '10%', right: '15%' },
        size: { width: '350px', height: '350px' },
        hue: theme === 'gradient' ? baseHue + 90 : baseHue + 10,
        hoverIntensity: interactive ? 0.2 : 0,
        rotateOnHover: interactive,
        opacity: 0.45,
        blur: 1.5,
        animation: 'float-fast'
      });
    }
    
    if (intensity === 'low') {
      // Low intensity - just two subtle orbs
      baseConfigs.push({
        id: 'orb-1',
        position: { top: '5%', left: '10%' },
        size: { width: '400px', height: '400px' },
        hue: baseHue,
        hoverIntensity: interactive ? 0.15 : 0,
        rotateOnHover: interactive,
        opacity: 0.3,
        blur: 2,
        animation: 'float-slow'
      });
      
      baseConfigs.push({
        id: 'orb-2',
        position: { bottom: '5%', right: '10%' },
        size: { width: '350px', height: '350px' },
        hue: theme === 'gradient' ? baseHue + 60 : baseHue,
        hoverIntensity: interactive ? 0.1 : 0,
        rotateOnHover: interactive,
        opacity: 0.25,
        blur: 2.5,
        animation: 'float-reverse'
      });
    }
    
    return baseConfigs;
  }, [theme, intensity, interactive]);
  
  return (
    <>
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(0.95); }
          66% { transform: translate(20px, -30px) scale(1.05); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -20px) scale(1.1); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -10px) scale(1.02); }
          50% { transform: translate(-10px, 15px) scale(0.98); }
          75% { transform: translate(15px, 5px) scale(1.02); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.05);
            filter: brightness(1.2);
          }
        }
        
        .float-slow { animation: float-slow 20s ease-in-out infinite; }
        .float-reverse { animation: float-reverse 25s ease-in-out infinite; }
        .float-medium { animation: float-medium 18s ease-in-out infinite; }
        .float-fast { animation: float-fast 15s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 8s ease-in-out infinite; }
        
        .orb-wrapper {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        {orbConfigs.map((config) => (
          <div
            key={config.id}
            className={`absolute orb-wrapper ${config.animation} max-lg:scale-75 max-md:scale-50`}
            style={{
              ...config.position,
              width: config.size.width,
              height: config.size.height,
              opacity: config.opacity,
              filter: config.blur ? `blur(${config.blur}px)` : undefined,
              pointerEvents: interactive ? 'auto' : 'none',
            }}
          >
            <Orb
              hue={config.hue}
              hoverIntensity={config.hoverIntensity}
              rotateOnHover={config.rotateOnHover}
              forceHoverState={config.forceHoverState}
            />
          </div>
        ))}
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>
    </>
  );
}
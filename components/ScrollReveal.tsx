'use client';

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide' | 'scale' | 'blur' | 'word';
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  stagger?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade',
  duration = 0.8,
  delay = 0,
  y = 30,
  x = 0,
  scale = 0.95,
  blur = 10,
  stagger = 0.1,
  className = '',
  threshold = 0.1,
  once = true,
  scrub = false,
  pin = false,
  markers = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  // Memoize animation configurations
  const animationConfig = useMemo(() => {
    const baseConfig = {
      duration,
      delay,
      ease: 'power2.out',
    };

    switch (animation) {
      case 'slide':
        return {
          ...baseConfig,
          y,
          x,
          opacity: 0,
        };
      case 'scale':
        return {
          ...baseConfig,
          scale,
          opacity: 0,
        };
      case 'blur':
        return {
          ...baseConfig,
          opacity: 0,
          filter: `blur(${blur}px)`,
          y: y / 2,
        };
      case 'word':
        return {
          ...baseConfig,
          opacity: 0,
          y: 20,
          rotationX: -90,
        };
      case 'fade':
      default:
        return {
          ...baseConfig,
          opacity: 0,
          y: y / 3,
        };
    }
  }, [animation, duration, delay, y, x, scale, blur, stagger]);

  useEffect(() => {
    if (!elementRef.current) return;

    let targets: HTMLElement | HTMLElement[] = elementRef.current;
    
    // For word animation, split text into spans
    if (animation === 'word' && elementRef.current) {
      const text = elementRef.current.innerText;
      const words = text.split(' ').map((word, i) => (
        `<span class="inline-block" style="transform-origin: center bottom;">${word}${i < text.split(' ').length - 1 ? '&nbsp;' : ''}</span>`
      ));
      elementRef.current.innerHTML = words.join('');
      wordsRef.current = Array.from(elementRef.current.querySelectorAll('span'));
      targets = wordsRef.current;
    }

    // Set initial state
    gsap.set(targets, animationConfig);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: `top ${100 - threshold * 100}%`,
        end: scrub ? 'bottom top' : undefined,
        scrub,
        pin,
        markers,
        once,
        onEnter: () => {
          if (!scrub) {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              filter: 'blur(0px)',
              rotationX: 0,
              duration: animationConfig.duration,
              delay: animationConfig.delay,
              ease: animationConfig.ease,
              stagger: animation === 'word' ? { each: stagger, from: 'start' } : 0,
            });
          }
        },
      },
    });

    // If scrub is enabled, create scrubbed animation
    if (scrub) {
      tl.to(targets, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        rotationX: 0,
        ease: 'none',
        stagger: animation === 'word' ? { each: stagger, from: 'start' } : 0,
      });
    }

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [animation, animationConfig, threshold, once, scrub, pin, markers]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Preset animations for common use cases
export function FadeIn({ children, className = '', ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return (
    <ScrollReveal animation="fade" className={className} {...props}>
      {children}
    </ScrollReveal>
  );
}

export function SlideIn({ children, className = '', ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return (
    <ScrollReveal animation="slide" className={className} {...props}>
      {children}
    </ScrollReveal>
  );
}

export function ScaleIn({ children, className = '', ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return (
    <ScrollReveal animation="scale" className={className} {...props}>
      {children}
    </ScrollReveal>
  );
}

export function BlurIn({ children, className = '', ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return (
    <ScrollReveal animation="blur" className={className} {...props}>
      {children}
    </ScrollReveal>
  );
}

export function WordReveal({ children, className = '', ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return (
    <ScrollReveal animation="word" className={className} {...props}>
      {children}
    </ScrollReveal>
  );
}
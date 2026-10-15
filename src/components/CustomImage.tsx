import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ImageOff, ExternalLink } from 'lucide-react';

export interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1' | '21:9' | string;
  priority?: boolean;
  blurDataURL?: string;
  className?: string;
  containerClassName?: string;
  caption?: string;
  credit?: string;
  sourceUrl?: string;
  license?: string;
  isAuthenticLasalgaon?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Parses aspect ratio string (e.g., '16:9', '4:3', '1:1') into width and height values.
 */
function resolveDimensions(
  explicitWidth?: number,
  explicitHeight?: number,
  aspectRatioStr: string = '16:9'
): { width: number; height: number; cssAspectRatio: string } {
  // If both width and height are provided explicitly, use them
  if (explicitWidth && explicitHeight) {
    return {
      width: explicitWidth,
      height: explicitHeight,
      cssAspectRatio: `${explicitWidth} / ${explicitHeight}`,
    };
  }

  // Parse aspect ratio string like "16:9", "4:3", "3:2", "1:1", "21:9"
  let ratioNumerator = 16;
  let ratioDenominator = 9;

  if (aspectRatioStr.includes(':')) {
    const parts = aspectRatioStr.split(':').map((p) => parseFloat(p.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[1] !== 0) {
      ratioNumerator = parts[0];
      ratioDenominator = parts[1];
    }
  } else if (aspectRatioStr.includes('/')) {
    const parts = aspectRatioStr.split('/').map((p) => parseFloat(p.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[1] !== 0) {
      ratioNumerator = parts[0];
      ratioDenominator = parts[1];
    }
  }

  const numericRatio = ratioNumerator / ratioDenominator;

  if (explicitWidth && !explicitHeight) {
    const calculatedHeight = Math.round(explicitWidth / numericRatio);
    return {
      width: explicitWidth,
      height: calculatedHeight,
      cssAspectRatio: `${ratioNumerator} / ${ratioDenominator}`,
    };
  }

  if (!explicitWidth && explicitHeight) {
    const calculatedWidth = Math.round(explicitHeight * numericRatio);
    return {
      width: calculatedWidth,
      height: explicitHeight,
      cssAspectRatio: `${ratioNumerator} / ${ratioDenominator}`,
    };
  }

  // Default dimension mapping based on aspect ratio standard desktop baseline (1200px max)
  let defaultWidth = 1200;
  if (ratioNumerator === 1 && ratioDenominator === 1) {
    defaultWidth = 800;
  } else if (ratioNumerator === 4 && ratioDenominator === 3) {
    defaultWidth = 1000;
  } else if (ratioNumerator === 3 && ratioDenominator === 2) {
    defaultWidth = 1200;
  }

  const defaultHeight = Math.round(defaultWidth / numericRatio);

  return {
    width: defaultWidth,
    height: defaultHeight,
    cssAspectRatio: `${ratioNumerator} / ${ratioDenominator}`,
  };
}

/**
 * CustomImage component designed to eliminate Cumulative Layout Shift (CLS)
 * by automatically computing and assigning explicit HTML width/height attributes
 * and CSS aspect-ratio containment. Features progressive blur-up transition,
 * native and intersection-assisted lazy loading, and an editorial fallback.
 */
export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width: propWidth,
  height: propHeight,
  aspectRatio = '16:9',
  priority = false,
  blurDataURL,
  className = '',
  containerClassName = '',
  caption,
  credit,
  sourceUrl,
  license,
  isAuthenticLasalgaon = false,
  objectFit = 'cover',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Compute layout dimensions for CLS prevention
  const { width, height, cssAspectRatio } = resolveDimensions(
    propWidth,
    propHeight,
    aspectRatio
  );

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // Check if image is already cached/completed in browser memory
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setIsLoaded(true);
        if (onLoad) onLoad();
      }
    }
  }, [src, isInView, onLoad]);

  // IntersectionObserver for lazy loading triggers
  useEffect(() => {
    if (priority || isInView) return;

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '250px 0px' } // Preload 250px before entering viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  const handleImageError = () => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  // Object fit class helper
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  const content = (
    <div
      ref={containerRef}
      style={{
        aspectRatio: cssAspectRatio,
      }}
      className={`relative w-full overflow-hidden rounded-md bg-[#FAF8F2] border border-[#E8E2D2] transition-colors duration-300 ${containerClassName}`}
    >
      {/* 1. Blur-up Low-Resolution / Micro Placeholder Layer */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F2] via-[#F2EDE1] to-[#EBE4D5]"
        >
          {blurDataURL ? (
            <img
              src={blurDataURL}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover filter blur-lg scale-110 opacity-70"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center space-y-2 opacity-50 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-[#174D35]/15 flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-[#D9A441]/40" />
              </div>
              <span className="text-[11px] font-serif text-[#575E59]/70 tracking-wide">
                Lasalgaon Archive Visual
              </span>
            </div>
          )}
        </div>
      )}

      {/* 2. Primary Image Element with Hardware-Accelerated Blur-Up Transition */}
      {!hasError ? (
        <>
          {isInView && (
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              referrerPolicy="no-referrer"
              // @ts-expect-error fetchpriority attribute is supported in modern browsers
              fetchpriority={priority ? 'high' : 'auto'}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={`w-full h-full ${objectFitClass} transition-all duration-700 ease-out ${
                isLoaded
                  ? 'opacity-100 filter-none scale-100'
                  : 'opacity-0 filter blur-md scale-102'
              } ${className}`}
            />
          )}

          {/* Verification Badge Overlay */}
          {isAuthenticLasalgaon && isLoaded && (
            <div className="absolute top-3 left-3 z-20 bg-[#174D35]/90 backdrop-blur-xs text-[#D9A441] px-2.5 py-1 rounded text-[11px] font-sans font-semibold tracking-wide flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Verified Lasalgaon Field Asset</span>
            </div>
          )}
        </>
      ) : (
        /* 3. Resilient Editorial Fallback if asset is unavailable */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF8F2]">
          <div className="w-10 h-10 rounded-full bg-[#174D35]/10 flex items-center justify-center mb-2">
            <ImageOff className="w-5 h-5 text-[#174D35]" />
          </div>
          <p className="text-sm font-serif font-semibold text-[#174D35] max-w-md leading-snug">
            {alt}
          </p>
          <p className="text-xs text-[#575E59] mt-1 font-sans">
            Archival Photographic Record · Lasalgaon Onion Market
          </p>
        </div>
      )}
    </div>
  );

  // If caption, credit, or sourceUrl is provided, wrap in an editorial <figure>
  if (caption || credit || sourceUrl || license) {
    return (
      <figure className="w-full my-6">
        {content}
        <figcaption className="mt-2.5 text-xs text-[#575E59] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 leading-normal font-sans">
          {caption && <span className="italic font-serif text-[#252B27]">{caption}</span>}
          <div className="flex items-center gap-2 text-[11px] shrink-0 text-[#575E59]">
            {credit && <span>Photo: {credit}</span>}
            {license && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#713B67] font-medium">{license}</span>
              </>
            )}
            {sourceUrl && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#174D35] underline inline-flex items-center gap-0.5"
                >
                  <span>Source</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>
              </>
            )}
          </div>
        </figcaption>
      </figure>
    );
  }

  return content;
};

export default CustomImage;

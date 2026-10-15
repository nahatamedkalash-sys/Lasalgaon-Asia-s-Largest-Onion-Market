import React from 'react';
import { CustomImage } from './CustomImage';

interface ResilientImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  sourceUrl?: string;
  license?: string;
  isAuthenticLasalgaon?: boolean;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1';
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  caption,
  credit,
  sourceUrl,
  license,
  isAuthenticLasalgaon,
  className = '',
  aspectRatio = '16:9',
  priority = false,
}) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      caption={caption}
      credit={credit}
      sourceUrl={sourceUrl}
      license={license}
      isAuthenticLasalgaon={isAuthenticLasalgaon}
      aspectRatio={aspectRatio}
      className={className}
      priority={priority}
    />
  );
};


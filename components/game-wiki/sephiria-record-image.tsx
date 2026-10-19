'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import type { SephiriaRecordImage } from '@/lib/sephiria-image-manifest';

export function SephiriaRecordImageView({ image, icon: Icon, size = 'default' }: { image?: SephiriaRecordImage | null; icon: LucideIcon; size?: 'default' | 'compact' }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'failed'>('loading');

  if (!image) {
    return <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#b99256]/25 bg-[#101714] text-[#dca464]"><Icon className="h-4 w-4" /></span>;
  }

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-[#b99256]/25 bg-[#1b2821] text-[#dca464] ${size === 'compact' ? 'h-12 w-12' : 'h-16 w-16'}`}
      style={{ backgroundImage: 'radial-gradient(circle at 50% 42%, rgba(220,164,100,0.08), transparent 70%)', boxShadow: 'inset 0 1px 0 rgba(255,242,223,0.04)' }}
    >
      {status !== 'loaded' && <Icon aria-hidden="true" className="h-4 w-4" />}
      {status !== 'failed' && <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        unoptimized
        loading="lazy"
        decoding="async"
        style={{ imageRendering: image.rendering === 'pixelated' ? 'pixelated' : 'auto', filter: image.rendering === 'pixelated' ? 'drop-shadow(0 1px 1px rgba(231,214,181,0.16))' : undefined }}
        className={`absolute inset-0 h-full w-full ${image.fit === 'cover' ? 'object-cover' : 'object-contain p-0.5'}${status === 'loaded' ? '' : ' opacity-0'}`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('failed')}
      />}
    </span>
  );
}

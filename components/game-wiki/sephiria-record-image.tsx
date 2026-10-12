'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import type { SephiriaRecordImage } from '@/lib/sephiria-image-manifest';

export function SephiriaRecordImageView({ image, icon: Icon }: { image?: SephiriaRecordImage | null; icon: LucideIcon }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'failed'>('loading');

  if (!image) {
    return <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#b99256]/25 bg-[#101714] text-[#dca464]"><Icon className="h-4 w-4" /></span>;
  }

  return (
    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden border border-[#b99256]/25 bg-[#101714] text-[#dca464]">
      {status !== 'loaded' && <Icon aria-hidden="true" className="h-4 w-4" />}
      {status !== 'failed' && <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        unoptimized
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full ${image.fit === 'cover' ? 'object-cover' : 'object-contain p-1'}${status === 'loaded' ? '' : ' opacity-0'}`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('failed')}
      />}
    </span>
  );
}

import Image from 'next/image';

export type BossGuideCardProps = {
  name: string;
  watch: string;
  dodge: string;
  attack: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageWidth: number;
  imageHeight: number;
  video: string;
  videoPoster: string;
  videoCaption: string;
};

export function BossGuideCard({ name, watch, dodge, attack, image, imageAlt, imageCaption, imageWidth, imageHeight, video, videoPoster, videoCaption }: BossGuideCardProps) {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const captionTrack = 'data:text/vtt,WEBVTT%0A%0A00:00:00.000%20--%3E%2000:59:59.000%0A' + encodeURIComponent(videoCaption);
  return (
    <article id={id} className="flex min-w-0 scroll-mt-24 flex-col border border-[var(--gold-border)]/30 bg-[var(--surface)] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:p-5">
      <h2 className="font-serif text-2xl font-semibold text-[var(--heading)]">{name}</h2>
      <dl className="mt-4 grid gap-3 text-sm leading-6 sm:grid-cols-[4.5rem_minmax(0,1fr)]">
        <dt className="font-bold uppercase tracking-[0.12em] text-[var(--gold-label)]">Watch</dt><dd className="min-w-0 text-[var(--body-alt)]">{watch}</dd>
        <dt className="font-bold uppercase tracking-[0.12em] text-[var(--gold-label)]">Dodge</dt><dd className="min-w-0 text-[var(--body-alt)]">{dodge}</dd>
        <dt className="font-bold uppercase tracking-[0.12em] text-[var(--gold-label)]">Attack</dt><dd className="min-w-0 text-[var(--body-alt)]">{attack}</dd>
      </dl>
      <figure className="mt-5 min-w-0"><Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight} sizes="(max-width: 639px) 100vw, (max-width: 1279px) 45vw, 540px" loading="lazy" className="h-auto w-full rounded-lg border border-[var(--neutral-edge)]/15" /><figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{imageCaption}</figcaption></figure>
      <figure className="mt-4 min-w-0">
        <video controls playsInline preload="none" poster={videoPoster} aria-label={name + ' gameplay clip'} className="block h-auto w-full rounded-lg border border-[var(--neutral-edge)]/15">
          <source src={video} type="video/mp4" />
          <track kind="captions" src={captionTrack} srcLang="en" label="Gameplay captions" />
          Your browser does not support HTML video.
        </video>
        <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">{videoCaption}</figcaption>
      </figure>
    </article>
  );
}

import { gameLibraries } from '@/lib/game-catalog';

const shortDisclosure = "Independent fan-made guide. Not affiliated with or endorsed by the game's developer or publisher.";
const aboutDisclosure = 'RUNBACK is an independent fan-made game guide website. We are not affiliated with, endorsed by, sponsored by, or officially connected with the developers or publishers of the games covered on this site. Game names, trademarks, images, and other game-related materials belong to their respective owners.';

export function gameDisclosureFor(gameHref: string) {
  return gameLibraries.some((game) => game.status === 'LIVE' && gameHref === `/games/${game.slug}`)
    ? shortDisclosure
    : undefined;
}

export function GameDisclosure({ gameHref, position, className = '' }: { gameHref: string; position: 'hub' | 'footer'; className?: string }) {
  const text = gameDisclosureFor(gameHref);
  if (!text) return null;
  return <p data-fan-disclosure="game" data-disclosure-position={position} className={`text-xs leading-5 text-[#aeb7bc] ${className}`}>{text}</p>;
}

export function AboutDisclosure() {
  return <p data-fan-disclosure="about" data-disclosure-position="about" className="mt-8 text-xs leading-5 text-[#aeb7bc]">{aboutDisclosure}</p>;
}

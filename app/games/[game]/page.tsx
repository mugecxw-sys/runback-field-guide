import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articleLibraries, findLibrary } from '@/lib/game-articles';
import { gameLibraries } from '@/lib/game-catalog';
import { siteUrl } from '@/lib/repo-guide-pages';
type Props = {params: Promise<{game:string}>};
export function generateStaticParams(){return articleLibraries.map(g=>({game:g.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const g=findLibrary((await params).game); if(!g)return {};
 return {title:g.title+' Guides | RUNBACK',description:'Practical '+g.title+' guides: quick answers, step-by-step routes and credited sources.',alternates:{canonical:siteUrl+'/games/'+g.slug}};
}
export default async function GamePage({params}:Props){
 const g=findLibrary((await params).game);if(!g)notFound();
 const categories=[...new Set(g.articles.map(a=>a.category))];
 const catalog=gameLibraries.find(c=>c.slug===g.slug);
 return <main className="min-h-screen bg-[#111417] px-5 py-10 text-[#e1e6e8]"><div className="mx-auto max-w-5xl">
 <Link href="/#game-library" className="text-sm text-[#ff9a7a]">← RUNBACK / All games</Link>
 <p className="mt-12 text-xs uppercase tracking-widest text-[#9fd7ba]">{catalog?.type} · {g.articles.length} guides</p>
 <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{g.title} guides</h1>
 <p className="mt-5 max-w-2xl text-lg leading-8 text-[#aeb7bc]">{catalog?.description} Start with a 30-second answer, then follow the detailed steps.</p>
 <nav aria-label="Guide categories" className="mt-7 flex flex-wrap gap-2">{categories.map((c,i)=><a key={c} href={'#category-'+i} className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#ff8662]">{c}</a>)}</nav>
 {categories.map((category,i)=><section key={category} id={'category-'+i} className="mt-10 scroll-mt-6"><h2 className="text-xl font-semibold">{category}</h2><div className="mt-4 grid gap-4 md:grid-cols-2">{g.articles.filter(a=>a.category===category).map(a=><Link key={a.slug} href={'/games/'+g.slug+'/'+a.slug} className="rounded-xl border border-white/10 bg-[#192126] p-5 transition hover:border-[#ff8662]/60"><h3 className="text-lg font-semibold text-white">{a.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-[#aeb7bc]">{a.answer}</p><span className="mt-4 block text-sm font-semibold text-[#ff9a7a]">Read the guide →</span></Link>)}</div></section>)}
 <footer className="mt-14 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-[#aeb7bc]"><Link href="/">All games</Link><Link href="/about">About</Link><Link href="/editorial">Editorial policy</Link><Link href="/privacy">Privacy</Link></footer>
 </div></main>;
}

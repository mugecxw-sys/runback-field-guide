import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articleLibraries, articlePublishedAt, findLibrary } from '@/lib/game-articles';
import { siteUrl } from '@/lib/repo-guide-pages';
type Props={params:Promise<{game:string;slug:string}>};
export function generateStaticParams(){return articleLibraries.flatMap(g=>g.articles.map(a=>({game:g.slug,slug:a.slug})));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const p=await params,g=findLibrary(p.game),a=g?.articles.find(a=>a.slug===p.slug);if(!g||!a)return {};
 const title=g.title+': '+a.title, url=siteUrl+'/games/'+g.slug+'/'+a.slug;
 return {title:title+' | RUNBACK',description:a.answer,alternates:{canonical:url},openGraph:{title,description:a.answer,type:'article',url,publishedTime:articlePublishedAt},twitter:{card:'summary',title,description:a.answer}};
}
export default async function ArticlePage({params}:Props){
 const p=await params,g=findLibrary(p.game),a=g?.articles.find(a=>a.slug===p.slug);if(!g||!a)notFound();
 const index=g.articles.indexOf(a),related=[g.articles[index-1],g.articles[index+1]].filter(Boolean);
 const url=siteUrl+'/games/'+g.slug+'/'+a.slug;
 const jsonLd={'@context':'https://schema.org','@type':'Article',headline:g.title+': '+a.title,description:a.answer,datePublished:articlePublishedAt,dateModified:articlePublishedAt,inLanguage:'en',mainEntityOfPage:url,author:{'@type':'Organization',name:'RUNBACK'},citation:a.sources.map(s=>s.href)};
 return <main className="min-h-screen bg-[#111417] px-5 py-8 text-[#e1e6e8] sm:py-10"><article className="mx-auto max-w-3xl">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/>
 <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><Link href="/">RUNBACK</Link><span>/</span><Link href={'/games/'+g.slug} className="text-[#ff9a7a]">{g.title}</Link><span>/</span><span>{a.category}</span></nav>
 <h1 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{a.title}</h1>
 <section aria-label="30-second answer" className="mt-6 rounded-xl border border-[#ff7043]/30 bg-[#ff7043]/[0.07] p-5"><h2 className="text-xs font-bold uppercase tracking-widest text-[#ff9a7a]">30-second answer</h2><p className="mt-3 text-base leading-7">{a.answer}</p></section>
 <p className="mt-4 text-xs text-[#8f9aa1]">Published September 9, 2026 · Source-backed guide · Not a firsthand playtest</p>
 <section className="mt-10"><h2 className="text-2xl font-semibold">Step-by-step guide</h2><ol className="mt-5 space-y-4">{a.steps.map((step,i)=><li key={i} className="flex gap-4 rounded-xl border border-white/10 bg-[#192126] p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#ff7043]/15 font-mono text-[#ff9a7a]">{i+1}</span><p className="leading-7">{step}</p></li>)}</ol></section>
 <aside className="mt-8 grid gap-4 sm:grid-cols-2"><section className="rounded-xl border border-white/10 p-5"><h2 className="font-semibold text-white">Avoid this mistake</h2><p className="mt-3 leading-7 text-[#b8c3c9]">{a.mistakes}</p></section><section className="rounded-xl border border-[#79c7a0]/25 bg-[#79c7a0]/[0.05] p-5"><h2 className="font-semibold text-[#9fd7ba]">Version and scope</h2><p className="mt-3 leading-7 text-[#c2d7ca]">{a.versionNote}</p></section></aside>
 <section className="mt-10 border-t border-white/10 pt-6"><h2 className="text-xl font-semibold">Sources and further reading</h2><p className="mt-2 text-sm leading-6 text-[#aeb7bc]">Original synthesis based on the references below. Community strategies are recommendations, not guaranteed outcomes.</p><ul className="mt-4 space-y-3">{a.sources.map(s=><li key={s.href}><a href={s.href} target="_blank" rel="noreferrer" className="break-words text-sm text-[#ff9a7a] underline underline-offset-4">{s.label} ↗</a></li>)}</ul></section>
 <nav aria-label="More guides" className="mt-10 border-t border-white/10 pt-6"><Link href={'/games/'+g.slug} className="font-semibold text-[#ff9a7a]">← All {g.title} guides</Link><div className="mt-5 grid gap-3 sm:grid-cols-2">{related.map(r=><Link key={r.slug} href={'/games/'+g.slug+'/'+r.slug} className="rounded-lg border border-white/10 p-4 text-sm hover:border-[#ff8662]">{r.title} →</Link>)}</div></nav>
 <footer className="mt-12 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-[#aeb7bc]"><Link href="/">All games</Link><Link href="/about">About</Link><Link href="/editorial">Editorial policy</Link><Link href="/privacy">Privacy</Link></footer>
 </article></main>;
}

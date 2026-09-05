import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RUNBACK｜R.E.P.O. P0 一站式攻略',
  description: 'R.E.P.O. 首局流程、配额、撤离、升级、力量断点与怪物处理攻略。',
  openGraph: { title: 'RUNBACK｜R.E.P.O. P0 一站式攻略', description: '先把这一趟安全带回车。', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'RUNBACK｜R.E.P.O. P0 一站式攻略', description: '先把这一趟安全带回车。' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}

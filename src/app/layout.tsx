import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AC\'SCENT WOW | 당신의 최애를 향수로 표현한다면?',
  description: 'AI가 당신의 최애를 분석하고 어울리는 향수를 추천합니다',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <main className="flex-grow pt-16 sm:pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 
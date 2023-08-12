import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { Providers } from '@/store/provider';

import { Header } from '@/components/Header/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarketShop',
  description: 'MarketShop is the best store',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

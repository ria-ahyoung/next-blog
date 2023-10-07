import './globals.css';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ria Blog App',
  description: 'Welcome to Ria Blog!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}

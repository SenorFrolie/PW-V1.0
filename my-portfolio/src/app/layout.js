 import './globals.css';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: 'Robert Bonham',
  description: 'my portifio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
          <main>
            {children}
            <Analytics />
          </main>
      </body>
    </html>
  )
}
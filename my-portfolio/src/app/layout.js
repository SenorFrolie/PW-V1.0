 import './globals.css';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';

export const metadata = {
  title: 'Robert Bonham',
  description: 'my portifio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
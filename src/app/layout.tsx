import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nephridium',
  description: 'Explore datasets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> */}
        <div className="md:overflow-hidden">
          {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12"> */}
          <div className="p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  )
}

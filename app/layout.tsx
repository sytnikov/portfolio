import { Inter } from 'next/font/google'

import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexey Sytnikov | Personal Portfolio',
  description: 'Alexey is a full-stack developer with 4 years of experience in IT.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 h-[3000px]`}>
        <div className='left-circle'></div>
        <div className='right-circle'></div>
        <Header />
        {children}
      </body>
    </html>
  )
}

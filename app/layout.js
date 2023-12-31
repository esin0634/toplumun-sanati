import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ["400", "700"],
  style: ['normal', 'italic'],
  variable: '--font-raleway'
})

export const metadata = {
  title: 'Toplumun Sanati',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans`}>{children}</body>
    </html>
  )
}

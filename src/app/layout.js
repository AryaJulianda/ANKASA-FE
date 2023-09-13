import './globals.css'
import { Poppins } from 'next/font/google'

// const poppins = Poppins({ subsets: ['poppins'] })

const poppins = Poppins({
  weight: ['400','500','600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})
export const metadata = {
  title: 'Ankasa',
  description: 'Best app for flight',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

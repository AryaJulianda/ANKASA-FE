import './globals.css'
import { Poppins } from 'next/font/google'
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Loading from './Loading';

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
      <body className={poppins.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              padding: '18px 24px',
              fontSize:'18px'
            },
          }}
        />
      </body>
    </html>
  )
}

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
// export const metadata = {
//   title: 'Ankasa',
//   description: 'Best app for flight',
//   icons: [{ rel: 'icon', href: '/favicon.ico' }],
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ankasa</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
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

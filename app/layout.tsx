import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Urbanist } from 'next/font/google'
import styles from "./page.module.css"
import { Marcellus,Spectral, GFS_Didot } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import Head from 'next/head'
const urban = GFS_Didot({
  subsets: ['greek'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Necta',
  description: 'for you',
}



export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode 
 
}) {
  return (
    <html lang="en" className={styles.html}>
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={urban.className}>
        {children}
        </body>
    </html>
  )
}

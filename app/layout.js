import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/layouts/Header'
import Head from './Head'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Starter Shop',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

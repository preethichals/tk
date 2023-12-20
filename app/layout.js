import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ThoutKatalyst",
  description:
    "ThoutKatalyst plan and prioritize a series of tasks to achieve the desired outcomes in a predictable and timely manner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}

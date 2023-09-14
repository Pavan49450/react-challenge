import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Schedula Web',
  description: 'This application for web and mobile efficiently manages appointments and events. Seamlessly sync your calendar, set reminders, and share schedules with ease. Enhance productivity with task lists and intuitive time-blocking features. Stay organized on the go, whether for personal use or business coordination. Simplify your daily routines and never miss a beat with our user-friendly scheduling app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    
  )
}

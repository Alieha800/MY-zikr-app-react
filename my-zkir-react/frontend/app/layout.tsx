import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Zikir App',
  description: 'A Next.js application for Zikir and Duas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          '--foreground-rgb': '0, 0, 0',
          '--background-start-rgb': '214, 219, 220',
          '--background-end-rgb': '255, 255, 255',
        } as React.CSSProperties}>
          {children}
        </div>
      </body>
    </html>
  )
}
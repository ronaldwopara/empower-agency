import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Empower - Web Design Agency',
  description: 'We create powerful websites that drive results for businesses across all industries.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
      </body>
    </html>
  )
}
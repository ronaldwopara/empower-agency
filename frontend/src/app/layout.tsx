import Navigation from '@/components/layout/Navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navigation />
        {children}
      </body>
    </html>
  )
}

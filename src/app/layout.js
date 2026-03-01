import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Dawat-e-Islam | Serving Humanity for the Sake of Allah',
  description: 'A registered charitable trust committed to transparent, compassionate giving rooted in Islamic values.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

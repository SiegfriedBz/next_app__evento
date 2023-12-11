import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CustomContainer from "@/components/CustomContainer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evento - Find events around you",
  description: "Browse more than 10'000 events worldwide",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`bg-gray-950 text-white ${inter.className}`}>
        <CustomContainer>
          <Header />
          {children}
          <Footer />
        </CustomContainer>
      </body>
    </html>
  )
}

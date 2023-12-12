import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CustomContainer from "@/components/CustomContainer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evento - Find events around you",
  description: "Browse more than 10'000 events worldwide",
  metadataBase: new URL("https://evento-omega.vercel.app"),
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
        <ToastContainer />
      </body>
    </html>
  )
}

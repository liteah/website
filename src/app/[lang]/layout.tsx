import { RootProvider } from "fumadocs-ui/provider"
import { I18nProvider } from "fumadocs-ui/i18n"
import { Inter } from "next/font/google"

import "./global.css"
import { cn } from "@/lib/i18n"

const inter = Inter({
  subsets: ["latin"],
})

const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "简体中文（中国）",
    locale: "cn",
  },
]

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>
  children: React.ReactNode
}) {
  const lang = (await params).lang

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider locale={lang} locales={locales} translations={{ cn }[lang]}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  )
}

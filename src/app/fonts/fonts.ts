import {Inter, Roboto_Mono, Noto_Sans_JP} from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: "swap",
})

export const roboto_mono = Roboto_Mono({
  subsets:['latin'],
  display: "swap",
})

export const notoSansJP = Noto_Sans_JP({
  weight: ['400','700'],
  style: "normal",
  subsets: ["latin"]
})
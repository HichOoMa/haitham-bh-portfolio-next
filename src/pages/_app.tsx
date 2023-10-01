import '@/styles/home.css'
import '@/styles/globals.css'
import '@/styles/about.css'
import '@/styles/contact.css'
import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/projects.css'
import '@/styles/stage.css'
import '@/styles/footer.scss'
import '@/styles/projectCard.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

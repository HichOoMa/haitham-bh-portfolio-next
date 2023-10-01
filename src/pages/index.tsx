import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import HomeView from '@/components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main style={{display: 'flex', flexDirection: 'column'}}>
        <a href="#home"></a>
        <HomeView />
        <a href="#about"></a>
        <About />
        <a href="#project"></a>
        <Projects />
        <a href="#contact"></a>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

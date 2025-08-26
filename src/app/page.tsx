import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { QuizzPage } from "./_components/quizzpage";

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <QuizzPage/>
    </main>
  )
}
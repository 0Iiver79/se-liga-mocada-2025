import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}
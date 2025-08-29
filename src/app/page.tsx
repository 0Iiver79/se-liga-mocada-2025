
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { QuizzPage } from "./_components/quizzpage";
import { Pesquisa } from "./_components/pesquisa";
import ContatosPage from "./contatos/page";

export default function Home(){
  return(
    <main className="pt-24 scroll-smooth">
      <Navbar/>
  <Hero/>
  <About/>
  <Pesquisa/>
  <QuizzPage/>
 
  
  {/* ONGs Carrossel */}
  {require("./ongs/page").default()}
      {/* Seção de Contatos 
      <section id="contatos" className="w-full flex justify-center bg-white py-20">
        <div className="max-w-3xl w-full px-6">
          <ContatosPage />
        </div>
      </section>*/}
    </main>
  )
}
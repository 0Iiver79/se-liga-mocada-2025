import Image from "next/image";
interface OngCardProps {
  nome: string;
  logo: string;
  instagram: string;
  site: string;
}
export function OngCard({ nome, logo, instagram, site }: OngCardProps) {
  return (
  <div className="flex flex-col items-center gap-8 w-[36rem] max-w-full px-8 py-10 hover:scale-105 transition-all duration-300 group">
      <h3 className="font-bold text-3xl text-center text-[#8C4FA3] mb-6 tracking-tight drop-shadow-sm">{nome}</h3>
      {/* Círculo decorativo para futura imagem */}
      <div className="w-32 h-32 rounded-full bg-[#E9D5FF] flex items-center justify-center mb-2 shadow-lg overflow-hidden">
        {/* Quando quiser, coloque a imagem aqui dentro */}
        {logo && (
          <Image src={logo} alt={nome} width={128} height={128} className="rounded-full object-cover scale-110" />
        )}
      </div>
      <div className="flex gap-8 mt-4">
        <a href={instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:scale-110 transition-transform">
          <svg width="40" height="40" fill="currentColor" className="text-pink-500"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/></svg>
        </a>
        <a href={site} target="_blank" rel="noopener noreferrer" title="Site oficial" className="hover:scale-110 transition-transform">
          <svg width="40" height="40" fill="currentColor" className="text-blue-600"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c1.7 0 3.25.5 4.5 1.36A8.5 8.5 0 0 0 12 20.5a8.5 8.5 0 0 0 0-17zm0 1.5a7 7 0 0 1 7 7c0 1.61-.51 3.1-1.38 4.32A7.01 7.01 0 0 1 12 4.5zm0 1.5a5.5 5.5 0 0 0-5.5 5.5c0 1.21.38 2.33 1.03 3.25A5.5 5.5 0 0 0 12 6zm0 1.5a4 4 0 0 1 4 4c0 .89-.29 1.7-.78 2.36A4 4 0 0 1 12 7.5z"/></svg>
        </a>
      </div>
    </div>
  );
}

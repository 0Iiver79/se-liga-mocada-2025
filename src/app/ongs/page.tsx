
import { ongs } from "@/data/ongs";
import { OngCard } from "@/components/OngCard";
import { OngsCarousel } from "@/components/OngsCarousel";

export default function OngsPage() {
		return (
			<section className="py-16 px-2 md:px-6 bg-[#F3E8FF] min-h-[80vh] w-full flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-[#8C4FA3] drop-shadow-sm tracking-tight">
					Projetos e Instituições de Apoio à Mulher
				</h2>
				<div className="relative w-full max-w-7xl">
					<OngsCarousel />
				</div>
			</section>
		);
}


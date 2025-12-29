// components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-white via-[#FCE7F3]/50 to-[#FBCFE8]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24 gap-8">
          
          {/* LADO ESQUERDO: Texto */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-black leading-tight">
              A elegância tem cor <br />
              <span className="text-gray-500">e ela é </span>
              <span className="text-brand-black">PRATA!</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0 font-light">
              Joias em Prata 925 que realçam sua beleza natural. 
              Peças delicadas para todos os momentos.
            </p>
            
            <div className="pt-4">
              <Link 
                href="/colares" 
                className="inline-block bg-brand-black text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Coleção
              </Link>
            </div>
          </div>

          {/* LADO DIREITO: Imagem */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Círculo decorativo de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[500px] bg-white p-2 shadow-2xl rounded-t-[100px] rounded-b-[20px] rotate-2 hover:rotate-0 transition-all duration-500">
               <Image 
                 src="/hero.jpg" 
                 alt="Coleção Tendência em Prata" 
                 fill 
                 className="object-cover rounded-t-[95px] rounded-b-[15px]" 
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
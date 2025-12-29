"use client";

import Image from "next/image";
import Link from "next/link";

const instagramImages = [
  { src: "/Colar.jpg", alt: "Colar em Prata" },
  { src: "/Anel.jpg", alt: "Anel em Prata" },
  { src: "/Pulseira.jpg", alt: "Pulseira em Prata" },
  { src: "/Brinco.jpg", alt: "Brinco em Prata" },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-brand-black mb-2">
          Siga @tendenciaemprata
        </h2>
        <p className="text-gray-500">Acompanhe nossas novidades no Instagram</p>
      </div>

      {/* Grid de Imagens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {instagramImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Botão para Instagram */}
      <div className="text-center">
        <Link
          href="https://www.instagram.com/tendenciaemprata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:opacity-90 transition-opacity duration-300"
        >
          Acompanhar no Instagram
        </Link>
      </div>
    </section>
  );
}


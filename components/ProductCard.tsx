"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCartStore, type Product } from "@/store/cartStore";

// Dados simulados (depois virão do banco de dados)
const products: Product[] = [
  {
    id: 1,
    name: "Colar Ponto de Luz",
    price: "R$ 89,90",
    image: "",
    imageSrc: "/Colar.jpg",
  },
  {
    id: 2,
    name: "Anel Solitário Prata",
    price: "R$ 129,90",
    image: "",
    imageSrc: "/Anel.jpg",
  },
  {
    id: 3,
    name: "Pulseira Elo Português",
    price: "R$ 159,90",
    image: "",
    imageSrc: "/Pulseira.jpg",
  },
  {
    id: 4,
    name: "Brinco Argola Coração",
    price: "R$ 69,90",
    image: "",
    imageSrc: "/Brinco.jpg",
  }
];

const categories: Record<number, string> = {
  1: "Colares",
  2: "Anéis",
  3: "Pulseiras",
  4: "Brincos"
};

export default function ProductList() {
  const { addItem } = useCartStore();

  const handleAddToCart = (product: Product) => {
    addItem(product);
    // O store já abre o carrinho automaticamente quando adiciona um item
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-brand-black mb-2">
          Os Favoritos
        </h2>
        <p className="text-gray-500">As peças mais amadas pelas nossas clientes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Imagem do Card */}
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-200 relative mb-4 group-hover:shadow-lg transition-all duration-300">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Botão de Adicionar à Sacola (Aparece ao passar o mouse) */}
              <button 
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-rose hover:text-brand-black text-gray-700 z-10"
                aria-label={`Adicionar ${product.name} à sacola`}
              >
                <ShoppingBag size={20} />
              </button>
            </div>

            {/* Informações do Produto */}
            <div className="space-y-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide">{categories[product.id]}</p>
              <h3 className="font-serif text-lg font-medium text-brand-black group-hover:text-brand-roseDark transition-colors">
                <Link href={`/produto/${product.id}`}>
                  {product.name}
                </Link>
              </h3>
              <p className="font-bold text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/produtos" className="inline-block border border-brand-black px-8 py-3 rounded-full hover:bg-brand-black hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest font-bold">
          Ver Toda a Loja
        </Link>
      </div>
    </section>
  );
}
import Hero from "@/components/HeroSection";
import ProductList from "@/components/ProductCard";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção 1: O Banner Principal */}
      <Hero />
      
      {/* Seção 2: A Vitrine de Produtos */}
      <ProductList />
      
      {/* Seção 3: Feed do Instagram */}
      <InstagramFeed />
    </div>
  );
}

import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import Navbar from "@/components/Navbar"; // Importando o menu
import CartSidebar from "@/components/CartSidebar"; // Importando a gaveta do carrinho
import "./globals.css";

export const metadata: Metadata = {
  title: "Tendência em Prata | Joias em Prata 925",
  description: "A elegância tem cor e ela é PRATA!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-white text-brand-black`}>
        
        {/* O MENU FICA AQUI */}
        <Navbar /> 
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Gaveta do Carrinho - Desliza da direita */}
        <CartSidebar />
        
        {/* Rodapé simples provisório */}
        <footer className="bg-brand-rose/30 py-6 text-center text-sm text-gray-600">
          <p>© 2024 Tendência em Prata. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
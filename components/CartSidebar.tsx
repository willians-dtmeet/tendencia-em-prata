"use client";

import { useCartStore, type CartItem } from "@/store/cartStore";
import { X, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function CartSidebar() {
  const { items, removeItem, isOpen, closeCart } = useCartStore();

  // Previne scroll do body quando o carrinho está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Função auxiliar para converter "R$ 89,90" em número (89.90) para somar
  const total = items.reduce((acc: number, item: CartItem) => {
    const priceNumber = parseFloat(item.price.replace("R$", "").replace(",", ".").trim());
    return acc + priceNumber * item.quantity;
  }, 0);

  // Função para finalizar pedido via WhatsApp
  const handleCheckout = () => {
    // Número do WhatsApp da loja (Formato: 55 + DDD + Numero)
    // Edite este número conforme necessário
    const phoneNumber = "5511994965219"

    // Cria a lista de produtos em texto
    const productList = items.map((item: CartItem) => 
      `▪️ ${item.quantity}x ${item.name} (${item.price})`
    ).join("\n");

    // Formata o valor total
    const totalFormatted = new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(total);

    // Monta a mensagem final
    const message = 
`Olá! 👋 Escolhi meus produtos no site e gostaria de finalizar o pedido:

${productList}

*Valor Total: ${totalFormatted}*

Como podemos prosseguir com o pagamento e entrega?`;

    // Gera o link e abre em nova aba
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Backdrop - Fundo escuro transparente (clique para fechar) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* A Gaveta Branca - Desliza da direita */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Cabeçalho do Carrinho */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-serif text-2xl font-bold text-brand-black flex items-center gap-2">
            <ShoppingBag size={24} /> Sua Sacola
          </h2>
          <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <X size={24} />
          </button>
        </div>

        {/* Lista de Produtos */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p>Sua sacola está vazia.</p>
              <button onClick={closeCart} className="mt-4 text-brand-roseDark hover:underline">
                Voltar às compras
              </button>
            </div>
          ) : (
            items.map((item: CartItem) => (
              <div key={item.id} className="flex gap-4">
                {/* Imagem do Produto */}
                <div className="relative w-20 h-20 rounded-md flex-shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-brand-black">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.price}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                      Qtd: {item.quantity}
                    </span>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-600 p-1 transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé com Total e Botão */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-xl text-brand-black">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-full font-bold uppercase tracking-wide transition-colors"
            >
              Finalizar no WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
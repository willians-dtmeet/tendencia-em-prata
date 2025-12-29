'use client'

import ProductCard from './ProductCard'

const featuredProducts = [
  {
    id: '1',
    title: 'Anel em Prata 925 com Pedra',
    price: 149.90,
    installmentPrice: 49.97,
    installmentCount: 3,
    image: '/products/anel-1.jpg',
    hoverImage: '/products/anel-1-hover.jpg',
    href: '/produto/anel-prata-925',
  },
  {
    id: '2',
    title: 'Colar em Prata 925 Delicado',
    price: 199.90,
    installmentPrice: 66.63,
    installmentCount: 3,
    image: '/products/colar-1.jpg',
    hoverImage: '/products/colar-1-hover.jpg',
    href: '/produto/colar-prata-925',
  },
  {
    id: '3',
    title: 'Brinco em Prata 925 Minimalista',
    price: 89.90,
    installmentPrice: 29.97,
    installmentCount: 3,
    image: '/products/brinco-1.jpg',
    hoverImage: '/products/brinco-1-hover.jpg',
    href: '/produto/brinco-prata-925',
  },
  {
    id: '4',
    title: 'Pulseira em Prata 925 Elegante',
    price: 129.90,
    installmentPrice: 43.30,
    installmentCount: 3,
    image: '/products/pulseira-1.jpg',
    hoverImage: '/products/pulseira-1-hover.jpg',
    href: '/produto/pulseira-prata-925',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-pure-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark-gray mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg md:text-xl text-dark-gray/70 font-sans max-w-2xl mx-auto">
            Descubra nossa seleção especial de joias em prata 925
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              installmentPrice={product.installmentPrice}
              installmentCount={product.installmentCount}
              image={product.image}
              hoverImage={product.hoverImage}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


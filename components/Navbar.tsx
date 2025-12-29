'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart } = useCartStore()

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/colares', label: 'Colares' },
    { href: '/aneis', label: 'Anéis' },
    { href: '/pulseiras', label: 'Pulseiras' },
    { href: '/sobre', label: 'Sobre' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Brand Name */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif text-dark-gray hover:text-dark-gray/70 transition-colors">
              Tendência em Prata
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-gray hover:text-dark-gray/70 transition-colors font-sans text-sm md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              className="text-dark-gray hover:text-dark-gray/70 transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              className="text-dark-gray hover:text-dark-gray/70 transition-colors"
              aria-label="Conta"
            >
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={toggleCart}
              className="text-dark-gray hover:text-dark-gray/70 transition-colors"
              aria-label="Carrinho"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-dark-gray hover:text-dark-gray/70 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-soft-pink mt-2">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark-gray hover:text-dark-gray/70 transition-colors font-sans text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


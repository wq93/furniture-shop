import Link from 'next/link'
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useCartStore((state) => state.items)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            <div className="flex items-center space-x-16">
              <Link href="/" className="text-2xl font-light">
                VISCONTI CASA
              </Link>

              <nav className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  <li>
                    <Link 
                      href="/collections" 
                      className="text-sm uppercase tracking-wide hover:text-gray-600"
                    >
                      系列
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/categories" 
                      className="text-sm uppercase tracking-wide hover:text-gray-600"
                    >
                      分类
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/customization" 
                      className="text-sm uppercase tracking-wide hover:text-gray-600"
                    >
                      定制服务
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-sm uppercase tracking-wide hover:text-gray-600"
                    >
                      关于我们
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-20 items-center justify-between px-4 border-b">
          <span className="text-2xl font-light">VISCONTI CASA</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/collections"
                className="text-lg uppercase tracking-wide block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                系列
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="text-lg uppercase tracking-wide block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                分类
              </Link>
            </li>
            <li>
              <Link
                href="/customization"
                className="text-lg uppercase tracking-wide block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                定制服务
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg uppercase tracking-wide block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                关于我们
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

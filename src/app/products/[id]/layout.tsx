'use client'

import { useCartStore } from "@/store/cart"
import { useEffect } from "react"

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { addItem } = useCartStore()
  
  useEffect(() => {
    const handleAddToCart = (event: any) => {
      const product = event.detail
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.images[0],
      })
    }

    window.addEventListener('addToCart', handleAddToCart)
    return () => window.removeEventListener('addToCart', handleAddToCart)
  }, [addItem])

  return children
}

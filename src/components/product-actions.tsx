'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCartStore } from "@/store/cart"

interface ProductActionsProps {
  product: {
    id: string
    name: string
    price: number
    images: string[]
    collection: string
  }
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCartStore()

  return (
    <div className="space-y-4">
      <Button
        className="w-full mb-4"
        size="lg"
        onClick={() => {
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0],
          })
        }}
      >
        加入购物车
      </Button>

      <Link href={`/collections/${product.collection}`}>
        <Button variant="outline" className="w-full" size="lg">
          查看系列
        </Button>
      </Link>
    </div>
  )
}

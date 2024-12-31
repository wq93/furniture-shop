"use client"

import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
  onSelect?: () => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group"
      onClick={onSelect}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-light group-hover:text-gray-600 transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-600">
        ¥{product.price.toLocaleString()}
      </p>
    </Link>
  )
}

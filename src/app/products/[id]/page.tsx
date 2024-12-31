import Image from "next/image"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { ProductActions } from "@/components/product-actions"

export const dynamicParams = true

export async function generateStaticParams() {
  return products.slice(0, 5).map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="sticky top-20">
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl">¥{product.price}</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

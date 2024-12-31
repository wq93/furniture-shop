import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { collections } from "@/data/collections"

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug) || collections[0]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <Image
          src={collection.coverImage}
          alt={collection.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              {collection.name}
            </h1>
            <p className="text-lg text-white/90 mb-8">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.images.map((image, index) => (
            <div key={index} className="aspect-[3/4] relative group">
              <Image
                src={image}
                alt={`${collection.name} - ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Related Collections */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light mb-8">其他系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections
            .filter((c) => c.slug !== params.slug)
            .map((collection) => (
              <div key={collection.slug} className="group">
                <div className="aspect-[3/2] relative mb-4">
                  <Image
                    src={collection.coverImage}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-light mb-2">{collection.name}</h3>
                <Button variant="link" className="group-hover:underline p-0">
                  查看系列 <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

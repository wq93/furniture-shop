import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { collections } from "@/data/collections"

export default function CollectionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/collections/hero.jpg"
          alt="Collections"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              设计系列
            </h1>
            <p className="text-xl text-white/90 mb-8">
              探索我们精心打造的家具系列，每一件作品都诠释着独特的设计理念
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link key={collection.slug} href={`/collections/${collection.slug}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/2] mb-4">
                  <Image
                    src={collection.coverImage}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
                <h2 className="text-2xl font-light mb-2">{collection.name}</h2>
                <p className="text-gray-600 mb-4">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
            <p className="text-lg md:text-xl text-white/90 font-light">
              探索 Visconti Casa 独特的家具系列，每一个系列都诠释着不同的设计理念与生活美学
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.name}
                href={`/collections/${collection.slug}`}
                className="group"
              >
                <div className="relative h-[600px] overflow-hidden mb-6">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <Button variant="outline" className="group-hover:bg-black group-hover:text-white transition-colors">
                  查看系列
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Design Philosophy */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8">设计理念</h2>
            <p className="text-lg text-gray-600 mb-12">
              每一件 Visconti Casa 的作品都是艺术与实用的完美结合。我们坚持使用最优质的材料，
              结合传统工艺和现代技术，为您打造既能彰显个性，又能历久弥新的家具臻品。
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const collections = [
  {
    name: "MILANO 2024系列",
    slug: "milano-2024",
    description: "灵感源自米兰时尚之都的现代气息，将意式优雅与前卫设计完美融合。",
    image: "/collections/milano-2024.jpg",
  },
  {
    name: "ELEGANZA系列",
    slug: "eleganza",
    description: "极简主义美学下的奢华演绎，每一处细节都彰显非凡品味。",
    image: "/collections/eleganza.jpg",
  },
  {
    name: "CLASSICO系列",
    slug: "classico",
    description: "传承经典意式家具的精髓，以现代手法诠释永恒魅力。",
    image: "/collections/classico.jpg",
  },
  {
    name: "MODERNO系列",
    slug: "moderno",
    description: "突破传统界限，以大胆创新的设计语言，打造前卫时尚的生活空间。",
    image: "/collections/moderno.jpg",
  },
]

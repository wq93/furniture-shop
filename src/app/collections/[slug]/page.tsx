import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function CollectionPage({ params }: { params: { slug: string } }) {
  // 这里应该根据 slug 获取具体的系列信息
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
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              {collection.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Collection Info */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">设计理念</h2>
              <p className="text-gray-600 mb-8">
                {collection.concept}
              </p>
              <div className="space-y-4">
                {collection.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="h-6 w-6 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src={collection.conceptImage}
                alt="Design Concept"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16">系列产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-[400px] overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" className="group-hover:bg-black group-hover:text-white transition-colors">
                  了解详情
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16">材质与工艺</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collection.materials.map((material, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[300px] mb-6">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">{material.name}</h3>
                <p className="text-gray-600">{material.description}</p>
              </div>
            ))}
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
    coverImage: "/collections/milano-2024-cover.jpg",
    conceptImage: "/collections/milano-2024-concept.jpg",
    concept: "MILANO 2024系列汲取米兰时尚之都的设计灵感，将意大利传统工艺与现代美学完美融合。每一件作品都体现着精致的细节处理和独特的设计语言，为现代生活空间注入优雅格调。",
    features: [
      "采用高端环保材质，确保产品品质与可持续性",
      "融合传统手工艺与现代工艺技术",
      "独特的造型设计，彰显个性与品味",
      "细节之处精雕细琢，突显品质感",
    ],
    products: [
      {
        id: "1",
        name: "MILANO 沙发",
        description: "现代简约风格，舒适与美感的完美平衡",
        image: "/products/milano-sofa.jpg",
      },
      {
        id: "2",
        name: "MILANO 餐桌",
        description: "优雅大气的设计，为餐厅增添格调",
        image: "/products/milano-dining-table.jpg",
      },
      {
        id: "3",
        name: "MILANO 床",
        description: "极简设计理念，打造轻奢卧室空间",
        image: "/products/milano-bed.jpg",
      },
    ],
    materials: [
      {
        name: "优质实木",
        description: "精选意大利进口实木，确保产品品质与耐久性",
        image: "/materials/wood.jpg",
      },
      {
        name: "天然大理石",
        description: "采用优质大理石，每一纹理都独一无二",
        image: "/materials/marble.jpg",
      },
      {
        name: "精选面料",
        description: "高端面料，触感舒适，经久耐用",
        image: "/materials/fabric.jpg",
      },
    ],
  },
  // 其他系列...
]

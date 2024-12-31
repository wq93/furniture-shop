import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Share2 } from "lucide-react"
import { ProductGallery } from "@/components/product/gallery"
import { MaterialSelector } from "@/components/product/material-selector"
import { SizeGuide } from "@/components/product/size-guide"

export default function ProductPage({ params }: { params: { id: string } }) {
  // 这里应该根据 id 获取具体的产品信息
  const product = {
    id: "1",
    name: "MILANO 真皮沙发",
    description: "优雅的线条设计，搭配精选真皮面料，彰显意式轻奢品味。每一处细节都经过精心打磨，让您体验极致的坐感享受。",
    price: 29999,
    images: [
      "/products/sofa-1.jpg",
      "/products/sofa-2.jpg",
      "/products/sofa-3.jpg",
      "/products/sofa-4.jpg",
    ],
    materials: [
      {
        name: "头层牛皮",
        value: "brown",
        image: "/materials/leather-brown.jpg"
      },
      {
        name: "科技布艺",
        value: "gray",
        image: "/materials/fabric-gray.jpg"
      }
    ],
    dimensions: {
      width: 320,
      height: 85,
      depth: 120
    },
    features: [
      "优质头层牛皮，触感细腻",
      "高密度海绵填充，久坐不变形",
      "实木框架，结实耐用",
      "可拆卸设计，便于清洁保养"
    ]
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 产品图片展示 */}
          <ProductGallery images={product.images} />

          {/* 产品信息 */}
          <div className="sticky top-24">
            <h1 className="text-3xl font-light mb-4">{product.name}</h1>
            <p className="text-2xl mb-8">¥{product.price.toLocaleString()}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">产品描述</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* 材质选择器 */}
            <MaterialSelector materials={product.materials} />

            {/* 数量选择器 */}
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="icon">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl">1</span>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* 操作按钮 */}
            <div className="flex space-x-4 mb-8">
              <Button size="lg" className="flex-1">
                加入购物车
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                立即购买
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* 尺寸指南 */}
            <SizeGuide dimensions={product.dimensions} />

            {/* 产品特点 */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-medium mb-4">产品特点</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

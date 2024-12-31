"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* 主图显示 */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* 缩略图列表 */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-square overflow-hidden bg-gray-100",
              selectedImage === index && "ring-2 ring-black"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface Material {
  name: string
  value: string
  image: string
}

interface MaterialSelectorProps {
  materials: Material[]
}

export function MaterialSelector({ materials }: MaterialSelectorProps) {
  const [selected, setSelected] = useState(materials[0].value)

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">选择材质</h3>
      <div className="flex space-x-4">
        {materials.map((material) => (
          <button
            key={material.value}
            onClick={() => setSelected(material.value)}
            className={cn(
              "group relative w-20 h-20 rounded-lg overflow-hidden",
              selected === material.value && "ring-2 ring-black"
            )}
          >
            <Image
              src={material.image}
              alt={material.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {material.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

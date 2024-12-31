export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  collection?: string // 产品系列
  style: string // 产品风格：现代、轻奢等
  materials: {
    name: string
    description: string
  }[]
  dimensions: {
    width: number
    height: number
    depth: number
  }
  finishes: {
    name: string
    value: string
    image?: string
  }[]
  isNew: boolean
  isFeatured: boolean
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  coverImage: string
  products: string[] // 产品ID列表
  style: string
  year: string
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  coverImage: string
  slug: string
  subcategories?: {
    name: string
    slug: string
    image: string
  }[]
}

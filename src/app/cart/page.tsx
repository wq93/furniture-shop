"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"
import { cn } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // 免运费
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-light mb-4">购物车是空的</h2>
        <p className="text-gray-600 mb-8">快去挑选心仪的商品吧</p>
        <Link href="/collections">
          <Button>浏览商品</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">购物车</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 购物车商品列表 */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 p-4 bg-gray-50"
                >
                  <div className="relative w-full sm:w-48 aspect-square bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4">¥{item.price.toLocaleString()}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    {/* 数量选择器 */}
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-xl">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 订单摘要 */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 p-6 bg-gray-50">
              <h2 className="text-xl font-light mb-6">订单摘要</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">商品小计</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">运费</span>
                  <span>{shipping === 0 ? "免运费" : `¥${shipping}`}</span>
                </div>
                <div className="pt-4 border-t flex justify-between text-lg font-medium">
                  <span>总计</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                结算
              </Button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                结算即表示您同意我们的
                <Link href="/terms" className="underline">
                  条款和条件
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

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
          <Button variant="outline" size="lg">
            继续购物
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-light mb-8">购物车</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">¥{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-8 w-8",
                      item.quantity <= 1 && "opacity-50 cursor-not-allowed"
                    )}
                    disabled={item.quantity <= 1}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-600"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">订单摘要</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>小计</span>
                <span>¥{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>运费</span>
                <span>{shipping === 0 ? "免运费" : `¥${shipping}`}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>总计</span>
                  <span>¥{total}</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6">
              结算
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

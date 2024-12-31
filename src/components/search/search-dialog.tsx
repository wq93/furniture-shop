"use client"

import { useState } from "react"
import { Search as SearchIcon, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product/product-card"

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const handleSearch = async (value: string) => {
    setSearch(value)
    if (value.length < 2) {
      setResults([])
      return
    }

    setIsLoading(true)
    // 这里应该调用实际的搜索API
    // 模拟API调用
    setTimeout(() => {
      setResults([
        {
          id: "1",
          name: "MILANO 真皮沙发",
          price: 29999,
          image: "/products/sofa-1.jpg",
        },
        {
          id: "2",
          name: "ELEGANZA 餐桌",
          price: 19999,
          image: "/products/dining-table-1.jpg",
        },
      ])
      setIsLoading(false)
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="space-y-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="搜索产品..."
              className="pl-10"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="min-h-[200px]">
            {isLoading ? (
              <div className="flex items-center justify-center h-[200px]">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : results.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {results.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={() => setOpen(false)}
                  />
                ))}
              </div>
            ) : search.length > 0 ? (
              <div className="flex items-center justify-center h-[200px] text-gray-500">
                未找到相关产品
              </div>
            ) : null}
          </div>

          {results.length > 0 && (
            <div className="text-sm text-gray-500 text-center">
              显示 {results.length} 个搜索结果
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

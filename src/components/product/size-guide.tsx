"use client"

import { Button } from "@/components/ui/button"
import { Ruler } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Dimensions {
  width: number
  height: number
  depth: number
}

interface SizeGuideProps {
  dimensions: Dimensions
}

export function SizeGuide({ dimensions }: SizeGuideProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mb-8">
          <Ruler className="mr-2 h-4 w-4" />
          查看尺寸指南
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>产品尺寸</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100">
            {/* 这里可以放产品尺寸示意图 */}
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-500">宽度</p>
              <p className="text-lg">{dimensions.width}cm</p>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-500">高度</p>
              <p className="text-lg">{dimensions.height}cm</p>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-500">深度</p>
              <p className="text-lg">{dimensions.depth}cm</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

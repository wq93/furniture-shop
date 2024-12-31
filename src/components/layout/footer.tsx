'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-12">
        <nav className="flex justify-center space-x-12 mb-12">
          <Link href="/service" className="hover:text-white transition-colors">
            售后服务
          </Link>
          <Link href="/stores" className="hover:text-white transition-colors">
            门店信息
          </Link>
          <Link href="/products" className="hover:text-white transition-colors">
            产品中心
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            关于我们
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-4 mb-12">
          <div className="flex items-center">
            <span className="mr-4">公司地址：北京市昌平区</span>
            <span className="flex items-center">
              全国客服热线：
              <span className="text-[#D4A853] ml-2 text-lg">138 1129 1963</span>
            </span>
          </div>
          <div>
            服务在线时间：9:30~12:00 13:00~18:30
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-neutral-800 pt-8">
          <p>© 维斯康缇 京ICP备2021008859号 service@visconti-art.com.cn</p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 w-12 h-12 bg-[#D4A853] rounded-full flex items-center justify-center hover:bg-[#B38D45] transition-colors group"
      >
        <div className="flex flex-col items-center text-white text-xs">
          <ArrowUp className="h-4 w-4 mb-0.5" />
          <span>TOP</span>
        </div>
      </button>
    </footer>
  )
}

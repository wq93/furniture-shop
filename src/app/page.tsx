import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            <div className="relative h-full w-full bg-neutral-100">
              {/* Add video or image here */}
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="text-center px-4">
              <h1 className="text-6xl font-light mb-6">VISCONTI</h1>
              <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
                优雅生活，始于设计
              </p>
              <Button variant="outline" size="lg" className="text-lg px-8">
                探索系列
              </Button>
            </div>
          </div>
        </section>

        {/* Collections Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/collections/living-room" className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                  <div className="relative h-full w-full bg-neutral-100">
                    {/* Add image here */}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl">客厅系列</h3>
                  <p className="text-neutral-600 mt-2">探索更多 →</p>
                </div>
              </Link>
              <Link href="/collections/bedroom" className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                  <div className="relative h-full w-full bg-neutral-100">
                    {/* Add image here */}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl">卧室系列</h3>
                  <p className="text-neutral-600 mt-2">探索更多 →</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-6">品牌故事</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                VISCONTI始终秉持对优雅生活的追求，将意大利的设计美学与东方的生活哲学完美融合。
                每一件作品都凝聚着我们对品质的执着，以及对美好生活的向往。
              </p>
              <Button variant="outline">了解更多</Button>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-12">最新资讯</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <article key={item} className="group">
                  <div className="relative aspect-[3/2] overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                    <div className="relative h-full w-full bg-neutral-100">
                      {/* Add image here */}
                    </div>
                  </div>
                  <div>
                    <time className="text-sm text-neutral-500">2023.12.31</time>
                    <h3 className="text-lg mt-2 group-hover:text-neutral-600 transition-colors">
                      米兰设计周特别展览
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-6">联系我们</h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              无论是产品咨询还是设计建议，我们的专业团队随时为您提供帮助
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              预约咨询
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

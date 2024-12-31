import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CustomizationForm } from "@/components/customization/form"

export default function CustomizationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/customization/hero.jpg"
          alt="Customization"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              私人定制服务
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light">
              让我们的设计师为您打造独一无二的家具艺术品
            </p>
          </div>
        </div>
      </div>

      {/* Service Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">为什么选择定制</h2>
              <div className="space-y-6">
                {customizationFeatures.map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/customization/process.jpg"
                alt="Customization Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16">定制流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-16">预约咨询</h2>
            <CustomizationForm />
          </div>
        </div>
      </section>
    </div>
  )
}

const customizationFeatures = [
  {
    title: "个性化设计",
    description: "我们的设计师会根据您的需求和喜好，为您量身定制独特的家具方案。",
  },
  {
    title: "优质材料",
    description: "精选全球顶级材料，确保每件定制家具都达到最高品质标准。",
  },
  {
    title: "专业工艺",
    description: "采用传统手工艺与现代技术相结合的制作工艺，确保作品精致完美。",
  },
  {
    title: "终身保修",
    description: "我们对每件定制作品都提供终身保修服务，让您无后顾之忧。",
  },
]

const processSteps = [
  {
    title: "需求沟通",
    description: "与设计师深入交流，明确您的需求和期望",
  },
  {
    title: "方案设计",
    description: "设计师为您制定个性化方案，包括效果图和材料选择",
  },
  {
    title: "方案确认",
    description: "确认设计方案和预算，签订定制协议",
  },
  {
    title: "制作交付",
    description: "严格按照工艺流程制作，确保质量后交付安装",
  },
]

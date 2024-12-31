"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  phone: z.string().min(11, "请输入有效的手机号码"),
  category: z.string({
    required_error: "请选择产品类别",
  }),
  budget: z.string({
    required_error: "请选择预算范围",
  }),
  requirements: z.string().min(10, "需求描述至少10个字符"),
})

export function CustomizationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // 在这里处理表单提交
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>姓名</FormLabel>
              <FormControl>
                <Input placeholder="请输入您的姓名" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>邮箱</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的邮箱" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>手机号码</FormLabel>
                <FormControl>
                  <Input placeholder="请输入您的手机号码" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>产品类别</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="选择产品类别" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sofa">沙发</SelectItem>
                    <SelectItem value="dining">餐桌椅</SelectItem>
                    <SelectItem value="bedroom">卧室家具</SelectItem>
                    <SelectItem value="cabinet">柜类</SelectItem>
                    <SelectItem value="other">其他</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>预算范围</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="选择预算范围" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="50k">5万以下</SelectItem>
                    <SelectItem value="100k">5-10万</SelectItem>
                    <SelectItem value="200k">10-20万</SelectItem>
                    <SelectItem value="300k">20-30万</SelectItem>
                    <SelectItem value="more">30万以上</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>需求描述</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="请详细描述您的定制需求，包括风格偏好、空间尺寸等信息"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full">
          提交需求
        </Button>
      </form>
    </Form>
  )
}

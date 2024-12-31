'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface RegisterDialogProps {
  isOpen: boolean
  onClose: () => void
  onShowLogin: () => void
}

export function RegisterDialog({ isOpen, onClose, onShowLogin }: RegisterDialogProps) {
  const [verificationCode, setVerificationCode] = useState('')
  const [countdown, setCountdown] = useState(0)

  if (!isOpen) return null

  const handleGetCode = () => {
    // TODO: 发送验证码
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md mx-4 p-6 rounded-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="text-xl mb-8 text-center">新用户注册</h2>

        {/* Register Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Phone Input */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">手机号码</label>
            <input
              type="tel"
              placeholder="请输入手机号码"
              className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Verification Code */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">验证码</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="请输入验证码"
                className="flex-1 h-10 px-3 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <Button
                type="button"
                variant="outline"
                className="w-28 shrink-0"
                onClick={handleGetCode}
                disabled={countdown > 0}
              >
                {countdown > 0 ? `${countdown}s` : '获取验证码'}
              </Button>
            </div>
          </div>

          {/* Name */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">姓名</label>
            <input
              type="text"
              placeholder="请输入姓名"
              className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <label className="text-sm text-neutral-600 required">所在省市</label>
              <select className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors bg-white">
                <option value="">请选择</option>
              </select>
            </div>
            <div className="relative">
              <label className="text-sm text-neutral-600 required">所在市区</label>
              <select className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors bg-white">
                <option value="">请选择</option>
              </select>
            </div>
            <div className="relative">
              <label className="text-sm text-neutral-600 required">所在区县</label>
              <select className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors bg-white">
                <option value="">请选择</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <label className="text-sm text-neutral-600">详细地址</label>
            <input
              type="text"
              placeholder="如街道门牌号305"
              className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">登录密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">确认密码</label>
            <input
              type="password"
              placeholder="请再次输入密码"
              className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* User Type */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">类型</label>
            <select className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors bg-white">
              <option value="">请选择</option>
              <option value="designer">设计师</option>
              <option value="customer">普通用户</option>
            </select>
          </div>

          {/* Invitation Code */}
          <div className="relative">
            <label className="text-sm text-neutral-600 required">邀请码</label>
            <input
              type="text"
              placeholder="请输入邀请码"
              className="w-full h-10 px-3 mt-1 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#9F8A5E] hover:bg-[#8A754D] text-white mt-8"
          >
            注册
          </Button>

          {/* Login Link */}
          <div className="text-center text-sm">
            <span className="text-neutral-400">已有账号？</span>
            <button
              onClick={() => {
                onClose()
                onShowLogin()
              }}
              className="text-[#9F8A5E] hover:text-[#8A754D] ml-2"
            >
              去登录
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

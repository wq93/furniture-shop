'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LoginDialogProps {
  isOpen: boolean
  onClose: () => void
  onShowRegister: () => void
  onShowForgotPassword: () => void
}

export function LoginDialog({ 
  isOpen, 
  onClose, 
  onShowRegister,
  onShowForgotPassword 
}: LoginDialogProps) {
  if (!isOpen) return null

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
        <h2 className="text-xl mb-8 text-center">账号密码登录</h2>

        {/* Login Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Phone Input */}
          <div className="space-y-2">
            <label className="block text-sm text-neutral-600 required">手机号码</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="请输入手机号码"
                className="w-full h-10 px-3 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-3">
                <span className="text-sm text-neutral-400">+86</span>
              </div>
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="block text-sm text-neutral-600 required">密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              className="w-full h-10 px-3 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#9F8A5E] hover:bg-[#8A754D] text-white"
          >
            登录
          </Button>

          {/* Links */}
          <div className="flex justify-between text-sm">
            <div className="space-x-2">
              <span className="text-neutral-400">没有账号？</span>
              <button
                onClick={() => {
                  onClose()
                  onShowRegister()
                }}
                className="text-[#9F8A5E] hover:text-[#8A754D]"
              >
                去注册
              </button>
            </div>
            <button
              onClick={() => {
                onClose()
                onShowForgotPassword()
              }}
              className="text-[#9F8A5E] hover:text-[#8A754D]"
            >
              忘记密码？
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

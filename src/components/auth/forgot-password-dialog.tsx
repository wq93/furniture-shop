'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface ForgotPasswordDialogProps {
  isOpen: boolean
  onClose: () => void
  onShowLogin: () => void
}

export function ForgotPasswordDialog({ isOpen, onClose, onShowLogin }: ForgotPasswordDialogProps) {
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
        <h2 className="text-xl mb-8 text-center">忘记密码</h2>

        {/* Form */}
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

          {/* Verification Code */}
          <div className="space-y-2">
            <label className="block text-sm text-neutral-600 required">验证码</label>
            <div className="flex gap-2">
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

          {/* New Password */}
          <div className="space-y-2">
            <label className="block text-sm text-neutral-600 required">新密码</label>
            <input
              type="password"
              placeholder="请输入新密码"
              className="w-full h-10 px-3 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="block text-sm text-neutral-600 required">确认密码</label>
            <input
              type="password"
              placeholder="请再次输入新密码"
              className="w-full h-10 px-3 border-b border-neutral-200 outline-none focus:border-neutral-400 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#9F8A5E] hover:bg-[#8A754D] text-white"
          >
            确认找回
          </Button>

          {/* Back to Login */}
          <div className="text-center">
            <button
              onClick={() => {
                onClose()
                onShowLogin()
              }}
              className="text-[#9F8A5E] hover:text-[#8A754D] text-sm"
            >
              想起密码？去登录
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

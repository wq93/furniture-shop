'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, User } from 'lucide-react'
import { LoginDialog } from '@/components/auth/login-dialog'
import { RegisterDialog } from '@/components/auth/register-dialog'
import { ForgotPasswordDialog } from '@/components/auth/forgot-password-dialog'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: 实现搜索功能
  }

  const showLogin = () => {
    setIsLoginOpen(true)
    setIsRegisterOpen(false)
    setIsForgotPasswordOpen(false)
  }

  const showRegister = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(true)
    setIsForgotPasswordOpen(false)
  }

  const showForgotPassword = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(false)
    setIsForgotPasswordOpen(true)
  }

  return (
    <>
      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onShowRegister={showRegister}
        onShowForgotPassword={showForgotPassword}
      />
      <RegisterDialog 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onShowLogin={showLogin}
      />
      <ForgotPasswordDialog
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onShowLogin={showLogin}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-light">
              VISCONTI
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-neutral-600 hover:text-black">
                系列产品
              </Link>
              <Link href="/about" className="text-neutral-600 hover:text-black">
                品牌故事
              </Link>
              <Link href="/news" className="text-neutral-600 hover:text-black">
                新闻资讯
              </Link>
              <Link href="/contact" className="text-neutral-600 hover:text-black">
                联系我们
              </Link>
              <div className="flex items-center space-x-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="search"
                    placeholder="请输入关键字搜索产品"
                    className="w-64 h-9 pl-10 pr-4 rounded-full bg-neutral-100 text-sm outline-none placeholder:text-neutral-400 focus:bg-neutral-200 transition-colors"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                </form>
                <button 
                  onClick={showLogin}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <User className="h-4 w-4 text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center md:hidden">
              <form onSubmit={handleSearch} className="relative mr-2">
                <input
                  type="search"
                  placeholder="搜索产品"
                  className="w-40 h-8 pl-8 pr-3 rounded-full bg-neutral-100 text-sm outline-none placeholder:text-neutral-400 focus:bg-neutral-200 transition-colors"
                />
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              </form>
              <button 
                onClick={showLogin}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors mr-2"
              >
                <User className="h-4 w-4 text-neutral-600" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/collections"
                  className="text-neutral-600 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  系列产品
                </Link>
                <Link
                  href="/about"
                  className="text-neutral-600 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  品牌故事
                </Link>
                <Link
                  href="/news"
                  className="text-neutral-600 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  新闻资讯
                </Link>
                <Link
                  href="/contact"
                  className="text-neutral-600 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  联系我们
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X,
  Zap,
  Palette,
  Coffee,
  ChevronRight
} from 'lucide-react'

export function TechNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { 
      href: '/', 
      label: '現代企業官網', 
      icon: Zap,
      description: '引領未來的創新企業'
    },
    { 
      href: '/設計師作品集', 
      label: '設計師作品集', 
      icon: Palette,
      description: '設計改變世界'
    },
    { 
      href: '/生活風格部落格', 
      label: '生活風格部落格', 
      icon: Coffee,
      description: '生活的美好時光'
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
          </div>
          <div className="flex flex-col">
            <span className="handwriting text-2xl font-bold text-foreground">Tech Future</span>
            <span className="text-xs text-muted-foreground">科技未來</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-primary/10 text-foreground'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{link.label}</span>
                </div>
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden relative"
          onClick={toggleMobileMenu}
        >
          <div className="relative">
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </div>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="glass-card m-4 border-0">
            <nav className="p-6 space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'hover:bg-primary/10 text-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-white/20' : 'bg-primary/10'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{link.label}</div>
                        <div className="text-sm opacity-75">{link.description}</div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
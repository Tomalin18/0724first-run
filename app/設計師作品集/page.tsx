"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/types'
import { 
  Palette, 
  Monitor, 
  Smartphone,
  ArrowRight,
  ExternalLink,
  Play,
  Star
} from 'lucide-react'

export default function DesignerPortfolioPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    // Fetch products for gallery
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setProducts(data.slice(0, 3)) // Take first 3 products for gallery
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch products:', error)
      }
    }

    fetchProducts()

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - 設計師介紹 */}
      <section className="hero-section" style={{background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)'}}>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h1 className="handwriting text-5xl md:text-7xl text-white mb-8 drop-shadow-lg">
              設計改變世界
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              UI/UX設計師 · 品牌視覺專家
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              透過創意與技術的完美結合，為每個品牌創造獨特而有力的視覺體驗
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium">
                查看作品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-medium">
                <Play className="mr-2 h-5 w-5" />
                設計理念
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 設計服務 */}
      <section className="floating-section animate-on-scroll" style={{background: '#F8FAFC'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="handwriting-header text-foreground">設計服務</h2>
            <p className="text-xl text-muted-foreground">
              從概念到實現，打造完整的視覺體驗
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilted-card animate-on-scroll hover:shadow-2xl">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 mb-6 shadow-lg">
                  <Palette className="h-10 w-10 text-white" />
                </div>
                <h3 className="handwriting text-3xl font-semibold text-foreground mb-4">品牌設計</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  從Logo到完整品牌識別系統，創造獨特且具有辨識度的品牌形象
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Logo 設計與品牌標識</li>
                  <li>• 品牌色彩與視覺規範</li>
                  <li>• 行銷物料設計</li>
                  <li>• 品牌風格指南</li>
                </ul>
              </div>
            </div>
            
            <div className="tilted-card animate-on-scroll hover:shadow-2xl">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <h3 className="handwriting text-3xl font-semibold text-foreground mb-4">網站設計</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  響應式網頁設計，結合美學與使用者體驗，打造現代化的數位介面
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• UI/UX 使用者介面設計</li>
                  <li>• 響應式網頁設計</li>
                  <li>• 互動原型設計</li>
                  <li>• 使用者體驗優化</li>
                </ul>
              </div>
            </div>
            
            <div className="tilted-card animate-on-scroll hover:shadow-2xl">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-lg">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <h3 className="handwriting text-3xl font-semibold text-foreground mb-4">App設計</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  移動端應用程式設計，注重使用者體驗與視覺美感的完美平衡
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• iOS/Android App 介面</li>
                  <li>• 互動動效設計</li>
                  <li>• 使用者流程設計</li>
                  <li>• 應用圖標設計</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - 設計作品 */}
      <section className="py-24 px-6" style={{background: '#FFFFFF'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="handwriting-header text-foreground">精選作品</h2>
            <p className="text-xl text-muted-foreground">
              每個作品都是創意與技術的完美結合
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="group animate-on-scroll">
                <div className="glass-card p-0 overflow-hidden hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <div className="font-semibold text-sm">設計作品 #{index + 1}</div>
                          <div className="text-xs opacity-75">Creative Design</div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="handwriting text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      創意視覺設計，展現獨特的品牌個性與現代美學
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-primary font-semibold">
                        NT$ {(product.price_in_cents / 100).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button size="lg" className="btn-primary">
              查看更多作品
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="handwriting text-4xl md:text-6xl text-white mb-6">
            讓我們一起創造精彩
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            有設計需求嗎？讓我們聊聊您的想法，一起打造獨特的視覺體驗
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium">
              開始合作
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-medium">
              聯絡設計師
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6" style={{background: '#111827'}}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Palette className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="handwriting text-3xl font-bold text-white">Designer Portfolio</div>
              <div className="text-gray-400">設計師作品集</div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            透過設計改變世界，為每個品牌創造獨特而有力的視覺體驗。
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Designer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
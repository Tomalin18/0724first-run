"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Shield, 
  Rocket,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Quote
} from 'lucide-react'

export default function ModernCorporatePage() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - 漸層主視覺 */}
      <section ref={heroRef} className="hero-section">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h1 className="handwriting-header mb-8">
              引領未來的創新企業
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              我們運用最新技術和創新思維，為客戶創造無限可能
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="btn-primary">
                開始合作
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - 成就數據 */}
      <section className="floating-section animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-card">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="handwriting text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">滿意客戶</p>
            </div>
            <div className="glass-card">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <div className="handwriting text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">完成專案</p>
            </div>
            <div className="glass-card">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="handwriting text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">年經驗</p>
            </div>
            <div className="glass-card">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="handwriting text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">成功率</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 核心優勢 */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="handwriting-header">為什麼選擇我們</h2>
            <p className="text-xl text-muted-foreground">
              專業團隊 × 創新技術 × 優質服務
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilted-card animate-on-scroll">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="handwriting text-2xl font-semibold text-foreground mb-4">快速響應</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24小時內回應客戶需求，提供最及時的技術支援與解決方案
                </p>
              </div>
            </div>
            
            <div className="tilted-card animate-on-scroll">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="handwriting text-2xl font-semibold text-foreground mb-4">安全可靠</h3>
                <p className="text-muted-foreground leading-relaxed">
                  採用最高等級的安全標準，確保您的數據和隱私得到完善保護
                </p>
              </div>
            </div>
            
            <div className="tilted-card animate-on-scroll">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="handwriting text-2xl font-semibold text-foreground mb-4">持續創新</h3>
                <p className="text-muted-foreground leading-relaxed">
                  不斷探索新技術，為客戶提供最前沿的解決方案和服務體驗
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 客戶見證 */}
      <section className="floating-section animate-on-scroll" style={{background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)'}}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="handwriting text-4xl md:text-6xl text-white mb-16">客戶怎麼說</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card text-left" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-white text-lg leading-relaxed mb-6">
                &ldquo;與這個團隊合作是我們公司最明智的決定。他們不僅技術精湛，更重要的是真正理解我們的需求，提供了超出預期的解決方案。&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">王</span>
                </div>
                <div>
                  <div className="text-white font-semibold">王總經理</div>
                  <div className="text-gray-300 text-sm">科技創新公司</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card text-left" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-white text-lg leading-relaxed mb-6">
                &ldquo;專業度和服務品質都非常出色。從項目開始到完成，每個環節都處理得很細緻，讓我們能專注於核心業務發展。&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">李</span>
                </div>
                <div>
                  <div className="text-white font-semibold">李執行長</div>
                  <div className="text-gray-300 text-sm">數位行銷集團</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 行動呼籲 */}
      <section className="py-24 px-6" style={{background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)'}}>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="handwriting text-4xl md:text-6xl text-white mb-6">
            準備開始您的數位轉型之旅？
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            立即聯絡我們，獲得免費諮詢和專業建議
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium">
              免費諮詢
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium">
              查看案例
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - 現代頁尾 */}
      <footer className="py-16 px-6" style={{background: '#111827'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="handwriting text-2xl font-bold text-white">Tech Future</div>
                  <div className="text-gray-400 text-sm">科技未來</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                引領未來的創新企業，運用最新技術和創新思維，為客戶創造無限可能。
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">服務項目</h3>
              <ul className="space-y-2 text-gray-300">
                <li>數位轉型諮詢</li>
                <li>系統開發</li>
                <li>技術支援</li>
                <li>創新解決方案</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">聯絡資訊</h3>
              <ul className="space-y-2 text-gray-300">
                <li>電話: (02) 1234-5678</li>
                <li>信箱: info@techfuture.com</li>
                <li>地址: 台北市信義區</li>
                <li>服務時間: 週一至週五 9:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Tech Future. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
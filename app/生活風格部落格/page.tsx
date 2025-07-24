"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Coffee, 
  Home,
  ArrowRight,
  Calendar,
  User,
  Heart,
  MessageCircle,
  Clock
} from 'lucide-react'

export default function LifestyleBlogPage() {

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "京都秋日漫遊，尋找心靈的寧靜時光",
      excerpt: "在古老的寺廟間穿梭，感受千年文化的厚重底蘊，品味秋日楓葉下的茶香...",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&auto=format&fit=crop",
      category: "旅遊",
      date: "2024年3月15日",
      author: "生活家 Lisa",
      readTime: "5 分鐘",
      likes: 128,
      comments: 23
    },
    {
      id: 2,
      title: "手沖咖啡的藝術：在家也能享受專業級咖啡",
      excerpt: "從選豆到沖煮，每個步驟都是對生活品質的追求。讓我們一起探索咖啡的美妙世界...",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&auto=format&fit=crop",
      category: "美食",
      date: "2024年3月12日",
      author: "咖啡師 Mark",
      readTime: "8 分鐘",
      likes: 95,
      comments: 16
    },
    {
      id: 3,
      title: "北歐風居家佈置，打造溫馨自然的生活空間",
      excerpt: "簡約而不簡單，用最純粹的設計語言，創造出溫暖舒適的居住環境...",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&auto=format&fit=crop",
      category: "居家",
      date: "2024年3月10日",
      author: "設計師 Emma",
      readTime: "6 分鐘",
      likes: 156,
      comments: 31
    }
  ]

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

    // No additional setup needed

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - 部落格標題 */}
      <section className="hero-section" style={{background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #F59E0B 100%)'}}>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h1 className="handwriting text-5xl md:text-7xl text-amber-900 mb-8 drop-shadow-lg">
              生活的美好時光
            </h1>
            <p className="text-xl md:text-2xl text-amber-800/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              分享旅行、美食、生活中的點點滴滴
            </p>
            <p className="text-lg text-amber-800/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              用心記錄每個美好瞬間，與您分享生活中的小確幸與大智慧
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-amber-900 text-white hover:bg-amber-800 px-8 py-4 rounded-full font-medium">
                探索文章
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-full font-medium">
                訂閱部落格
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section - 精選文章 */}
      <section className="py-24 px-6" style={{background: '#FFFFFF'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="handwriting-header text-foreground">最新文章</h2>
            <p className="text-xl text-muted-foreground">
              發現生活中的美好，分享每個動人故事
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group animate-on-scroll">
                <div className="glass-card p-0 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="handwriting text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-3 w-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Button size="lg" className="btn-primary">
              閱讀更多文章
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section - 部落格分類 */}
      <section className="floating-section animate-on-scroll" style={{background: '#F9FAFB'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="handwriting-header text-foreground">熱門分類</h2>
            <p className="text-xl text-muted-foreground">
              探索不同面向的生活美學
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tilted-card animate-on-scroll hover:shadow-2xl group cursor-pointer">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="handwriting text-3xl font-semibold text-foreground mb-4">旅遊</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  探索世界各地的美麗風景，分享旅途中的難忘體驗與文化發現
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>城市漫遊</span>
                    <span className="text-primary font-medium">12 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span>自然探索</span>
                    <span className="text-primary font-medium">8 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span>文化體驗</span>
                    <span className="text-primary font-medium">15 篇</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tilted-card animate-on-scroll hover:shadow-2xl group cursor-pointer">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-10 w-10 text-white" />
                </div>
                <h3 className="handwriting text-3xl font-semibold text-foreground mb-4">美食</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  品味生活中的美好滋味，從家常料理到精緻餐飲的探索之旅
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>咖啡文化</span>
                    <span className="text-primary font-medium">20 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span>料理分享</span>
                    <span className="text-primary font-medium">18 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span>餐廳推薦</span>
                    <span className="text-primary font-medium">25 篇</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tilted-card animate-on-scroll hover:shadow-2xl group cursor-pointer">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Home className="h-10 w-10 text-white" />
                </div>
                <h3 className="handwriting text-3xl font-semibold text-foreground mb-4">居家</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  打造溫馨舒適的生活空間，分享居家佈置與生活品味的靈感
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>室內設計</span>
                    <span className="text-primary font-medium">14 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span>生活用品</span>
                    <span className="text-primary font-medium">22 篇</span>
                  </div>
                  <div className="flex justify-between">
                    <span>植物綠化</span>
                    <span className="text-primary font-medium">10 篇</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6" style={{background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'}}>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="handwriting text-4xl md:text-6xl text-white mb-6">
            訂閱我們的生活誌
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            每週收到精選文章，與我們一起探索生活的美好
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="輸入您的信箱"
              className="flex-1 px-6 py-4 rounded-full border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium whitespace-nowrap">
              立即訂閱
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6" style={{background: '#111827'}}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Coffee className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="handwriting text-3xl font-bold text-white">Lifestyle Blog</div>
              <div className="text-gray-400">生活風格部落格</div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            用心記錄生活中的美好時光，與您分享每個動人的故事與體驗。
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Lifestyle Blog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
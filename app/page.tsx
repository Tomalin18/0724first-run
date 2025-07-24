"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ProductCard } from '@/components/ProductCard'
import { ArrowRight, ShoppingBag, Heart, Shield, Truck } from 'lucide-react'
import type { Product, Category } from '@/lib/types'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // 模擬產品分類數據
  const categories: Category[] = [
    {
      id: 'wellness',
      name: '健康護理',
      description: '專業的健康護理用品，提升生活品質',
      image_url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&auto=format&fit=crop',
      productCount: 12
    },
    {
      id: 'personal-care',
      name: '個人護理',
      description: '精選個人護理產品，呵護每一天',
      image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&auto=format&fit=crop',
      productCount: 8
    },
    {
      id: 'accessories',
      name: '生活配件',
      description: '優質生活配件，提升日常體驗',
      image_url: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&auto=format&fit=crop',
      productCount: 15
    }
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const products: Product[] = await response.json()
        // 取前4個商品作為精選商品
        setFeaturedProducts(products.slice(0, 4))
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (productId: number) => {
    // 模擬加入購物車功能
    console.log('Added product to cart:', productId)
    // 這裡可以實現真正的購物車邏輯
  }

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            專業品質，私密服務
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            探索高端生活方式，享受專業的購物體驗與隱私保護
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="btn-primary">
                探索商品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="btn-secondary">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">隱私保護</h3>
              <p className="text-muted-foreground">
                嚴格保護客戶隱私，安全的購物環境
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">專業品質</h3>
              <p className="text-muted-foreground">
                精選高品質商品，專業的服務團隊
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">快速配送</h3>
              <p className="text-muted-foreground">
                快速且隱密的配送服務，保護您的隱私
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              精選商品
            </h2>
            <p className="text-muted-foreground text-lg">
              為您精心挑選的熱門商品
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted"></div>
                  <CardContent className="p-4">
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="btn-secondary">
                查看更多商品
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              商品分類
            </h2>
            <p className="text-muted-foreground text-lg">
              探索不同類別的精選商品
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image_url}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.productCount} 件商品</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Vibe Store</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              專業的成人用品商店，提供高品質產品與隱私保護的購物體驗
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">聯絡資訊</h4>
              <p>客服電話: 0800-123-456</p>
              <p>服務時間: 週一至週五 9:00-18:00</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">購物須知</h4>
              <p>隱私保護政策</p>
              <p>退換貨政策</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">關於我們</h4>
              <p>公司介紹</p>
              <p>服務條款</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Vibe Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

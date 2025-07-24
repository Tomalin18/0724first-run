"use client"

import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import type { Product } from '@/lib/types'
import { Filter, SortAsc } from 'lucide-react'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(8) // 初始顯示8個商品

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const productData: Product[] = await response.json()
        
        // 擴展商品數據以達到展示效果（重複現有商品）
        const expandedProducts = []
        for (let i = 0; i < 12; i++) {
          const originalProduct = productData[i % productData.length]
          expandedProducts.push({
            ...originalProduct,
            id: i + 1,
            name: `${originalProduct.name} ${i > 4 ? '(進階版)' : ''}`,
            inStock: Math.random() > 0.2 // 80% 有貨率
          })
        }
        
        setProducts(expandedProducts)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (productId: number) => {
    console.log('Added product to cart:', productId)
    // 實際的購物車邏輯會在這裡實現
  }

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 4, products.length))
  }

  const displayedProducts = products.slice(0, displayCount)
  const hasMore = displayCount < products.length

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Skeleton className="h-10 w-32 mb-4" />
          <Skeleton className="h-6 w-64" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <Skeleton className="aspect-square" />
              <CardContent className="p-4">
                <Skeleton className="h-4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-6 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          所有商品
        </h1>
        <p className="text-muted-foreground text-lg">
          探索我們精選的商品系列，找到最適合您的選擇
        </p>
      </div>

      {/* Filter and Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-card rounded-lg border">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            顯示 {displayedProducts.length} / {products.length} 個商品
          </span>
        </div>
        
        <div className="flex gap-2 sm:ml-auto">
          <Button variant="outline" size="sm">
            <SortAsc className="h-4 w-4 mr-2" />
            價格排序
          </Button>
          <Button variant="outline" size="sm">
            篩選條件
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {displayedProducts.map((product) => (
          <div key={product.id} className="slide-in">
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={handleLoadMore}
            size="lg"
            variant="outline"
            className="btn-secondary px-8"
          >
            載入更多商品
          </Button>
        </div>
      )}

      {/* Empty State (if no products) */}
      {!loading && products.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛍️</div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            暫無商品
          </h2>
          <p className="text-muted-foreground">
            商品正在準備中，敬請期待
          </p>
        </div>
      )}

      {/* Product Stats */}
      <div className="mt-16 p-6 bg-card rounded-lg border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">
              {products.length}
            </div>
            <div className="text-sm text-muted-foreground">
              精選商品
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              {products.filter(p => p.inStock !== false).length}
            </div>
            <div className="text-sm text-muted-foreground">
              現貨供應
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              3
            </div>
            <div className="text-sm text-muted-foreground">
              商品分類
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              客戶服務
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
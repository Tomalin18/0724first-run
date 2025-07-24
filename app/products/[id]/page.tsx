"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/lib/types'
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  Heart,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  Star
} from 'lucide-react'

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // 模擬多張商品圖片
  const productImages = [
    product?.image_url,
    product?.image_url,
    product?.image_url,
    product?.image_url
  ].filter(Boolean)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/api/products')
        const products: Product[] = await response.json()
        
        // 根據 ID 找到對應商品
        const productId = parseInt(params.id as string)
        let foundProduct = products.find(p => p.id === productId)
        
        // 如果沒找到，創建一個基於第一個商品的變體
        if (!foundProduct && products.length > 0) {
          const baseProduct = products[0]
          foundProduct = {
            ...baseProduct,
            id: productId,
            name: `${baseProduct.name} ${productId > 5 ? '(進階版)' : ''}`,
            description: '這是一個高品質的商品，採用優質材料製作，經過嚴格的品質檢驗。適合注重品質和體驗的顧客使用。我們提供完善的售後服務和品質保證。',
            category: '生活用品',
            inStock: Math.random() > 0.2
          }
        }
        
        setProduct(foundProduct || null)
      } catch (error) {
        console.error('Failed to fetch product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProduct()
    }
  }, [params.id])

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)))
  }

  const handleAddToCart = () => {
    if (product) {
      console.log(`Added ${quantity} of product ${product.id} to cart`)
      // 實際的購物車邏輯
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="animate-pulse">
          <div className="h-6 w-64 bg-muted rounded mb-8"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-square bg-muted rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold mb-2">商品未找到</h1>
        <p className="text-muted-foreground mb-8">
          您查找的商品不存在或已下架
        </p>
        <Link href="/products">
          <Button className="btn-primary">
            返回商品列表
          </Button>
        </Link>
      </div>
    )
  }

  const isInStock = product.inStock !== false

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl fade-in">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首頁</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">所有商品</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-card">
            <Image
              src={productImages[selectedImageIndex] || product.image_url}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index 
                    ? 'border-primary' 
                    : 'border-transparent hover:border-muted-foreground'
                }`}
              >
                <Image
                  src={image || product.image_url}
                  alt={`${product.name} ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-6">
          {/* Product Title and Status */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant={isInStock ? "default" : "secondary"} className={isInStock ? "status-in-stock" : "status-out-of-stock"}>
                {isInStock ? "有貨" : "缺貨"}
              </Badge>
              {product.category && (
                <Badge variant="outline">
                  {product.category}
                </Badge>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.0 分，128 評價)</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold price-display">
            {formatPrice(product.price_in_cents)}
          </div>

          {/* Description */}
          {product.description && (
            <div>
              <h3 className="font-semibold mb-2">商品描述</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          <Separator />

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium">數量：</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 min-w-[50px] text-center">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= 10}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              (最多 10 件)
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleAddToCart}
              disabled={!isInStock}
              className="flex-1 btn-primary"
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {isInStock ? "加入購物車" : "暫無庫存"}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-card rounded-lg">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">品質保證</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">快速配送</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-primary" />
              <span className="text-sm">7天退換</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Accordion */}
      <div className="mt-16">
        <Accordion type="single" collapsible defaultValue="details">
          <AccordionItem value="details">
            <AccordionTrigger className="text-lg font-semibold">
              商品詳細說明
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  本商品採用優質材料精心製作，經過嚴格的品質檢驗程序，確保每一件商品都符合我們的高標準要求。
                </p>
                <p>
                  適合注重品質和使用體驗的顧客，我們提供完整的產品保固和客戶服務支援。
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>優質材料製作</li>
                  <li>嚴格品質檢驗</li>
                  <li>專業客戶服務</li>
                  <li>安全隱私包裝</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="shipping">
            <AccordionTrigger className="text-lg font-semibold">
              配送與退換貨
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">配送資訊</h4>
                  <ul className="space-y-1">
                    <li>• 7-11 超商取貨：1-2 個工作天</li>
                    <li>• 宅配到府：2-3 個工作天</li>
                    <li>• 隱私包裝，保護客戶隱私</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">退換貨政策</h4>
                  <ul className="space-y-1">
                    <li>• 7 天鑑賞期</li>
                    <li>• 商品需保持全新狀態</li>
                    <li>• 提供完整包裝及配件</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
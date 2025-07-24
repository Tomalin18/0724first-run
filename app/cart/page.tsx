"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatPrice, calculateSubtotal, calculateCartTotal } from '@/lib/utils'
import type { CartItem } from '@/lib/types'
import { 
  Trash2, 
  Minus, 
  Plus, 
  ShoppingBag,
  ArrowLeft,
  CreditCard
} from 'lucide-react'

export default function CartPage() {
  // 模擬購物車數據
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "經典白色運動鞋",
      price_in_cents: 298000,
      image_url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&auto=format&fit=crop",
      quantity: 1,
      subtotal: 298000
    },
    {
      id: 2,
      name: "極簡主義皮革錢包",
      price_in_cents: 158000,
      image_url: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&auto=format&fit=crop",
      quantity: 2,
      subtotal: 316000
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(prev => prev.map(item => 
      item.id === id
        ? { 
            ...item, 
            quantity: newQuantity,
            subtotal: calculateSubtotal(item.price_in_cents, newQuantity)
          }
        : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const cartTotal = calculateCartTotal(cartItems)
  const shipping = 6000 // NT$ 60 運費
  const finalTotal = cartTotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center fade-in">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          購物車是空的
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          還沒有商品加入購物車，快去挑選喜歡的商品吧！
        </p>
        <Link href="/products">
          <Button size="lg" className="btn-primary">
            <ShoppingBag className="mr-2 h-5 w-5" />
            開始購物
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/products">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            繼續購物
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">購物車</h1>
          <p className="text-muted-foreground">
            {cartItems.length} 件商品
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image_url}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      單價：{formatPrice(item.price_in_cents)}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 py-2 min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Subtotal and Remove */}
                      <div className="text-right">
                        <p className="font-semibold price-display mb-2">
                          {formatPrice(item.subtotal)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          移除
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>訂單摘要</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Items Summary */}
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} × {item.quantity}
                    </span>
                    <span>{formatPrice(item.subtotal)}</span>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Cost Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">商品總計</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">運費</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
              </div>

              <Separator />

              {/* Total */}
              <div className="flex justify-between text-lg font-bold">
                <span>總計</span>
                <span className="price-display">{formatPrice(finalTotal)}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <Button size="lg" className="w-full btn-primary">
                  <CreditCard className="mr-2 h-5 w-5" />
                  前往結帳
                </Button>
              </Link>

              {/* Additional Info */}
              <div className="text-xs text-muted-foreground text-center space-y-1">
                <p>✓ 安全結帳保護</p>
                <p>✓ 7天鑑賞期退換貨</p>
                <p>✓ 隱私包裝配送</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Products or Continue Shopping */}
      <div className="mt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            您可能還喜歡
          </h2>
          <Link href="/products">
            <Button variant="outline" size="lg" className="btn-secondary">
              探索更多商品
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
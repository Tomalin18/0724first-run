"use client"

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/utils'
import { 
  CheckCircle, 
  Home,
  Package,
  MapPin,
  Phone,
  Mail,
  Download,
  Share2
} from 'lucide-react'

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('id') || '#2024001234'
  const [showAnimation, setShowAnimation] = useState(false)

  // 模擬訂單資料
  const orderData = {
    id: orderId,
    date: new Date().toLocaleDateString('zh-TW'),
    items: [
      {
        id: 1,
        name: "經典白色運動鞋",
        price_in_cents: 298000,
        quantity: 1,
        subtotal: 298000
      },
      {
        id: 2,
        name: "極簡主義皮革錢包",
        price_in_cents: 158000,
        quantity: 2,
        subtotal: 316000
      }
    ],
    customerInfo: {
      name: "王小明",
      phone: "0912-345-678",
      email: "example@email.com"
    },
    storeInfo: {
      name: "台北信義門市",
      address: "台北市信義區信義路五段7號"
    },
    subtotal: 614000,
    shipping: 6000,
    total: 620000
  }

  useEffect(() => {
    // 觸發動畫效果
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className={`text-center mb-12 transition-all duration-1000 ${showAnimation ? 'fade-in' : 'opacity-0 translate-y-4'}`}>
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-16 w-16 text-green-500 animate-pulse" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          訂單確認成功！
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          感謝您的購買，我們將盡快為您處理訂單
        </p>
        
        {/* Order ID */}
        <div className="bg-card border rounded-lg p-4 inline-block mb-8">
          <p className="text-sm text-muted-foreground mb-1">您的訂單編號</p>
          <p className="text-2xl font-bold text-primary font-mono">{orderData.id}</p>
          <p className="text-sm text-muted-foreground">訂單日期：{orderData.date}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <Card className="scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              訂單摘要
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Items */}
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(item.price_in_cents)} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">{formatPrice(item.subtotal)}</p>
                </div>
              ))}
            </div>

            <Separator />

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">商品總計</span>
                <span>{formatPrice(orderData.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">運費</span>
                <span>{formatPrice(orderData.shipping)}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>總計</span>
              <span className="price-display">{formatPrice(orderData.total)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Delivery & Contact Info */}
        <div className="space-y-6">
          {/* Delivery Information */}
          <Card className="slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                取貨資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">{orderData.storeInfo.name}</p>
                <p className="text-sm text-muted-foreground">{orderData.storeInfo.address}</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm font-medium text-foreground">預計到貨時間</p>
                <p className="text-sm text-muted-foreground">1-2 個工作天</p>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card className="slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                聯絡資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-16">姓名：</span>
                <span className="text-sm">{orderData.customerInfo.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-16">電話：</span>
                <span className="text-sm">{orderData.customerInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-16">信箱：</span>
                <span className="text-sm">{orderData.customerInfo.email}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <Link href="/">
          <Button size="lg" className="btn-primary">
            <Home className="mr-2 h-5 w-5" />
            返回首頁
          </Button>
        </Link>
        <Link href="/products">
          <Button size="lg" variant="outline" className="btn-secondary">
            <Package className="mr-2 h-5 w-5" />
            繼續購物
          </Button>
        </Link>
      </div>

      {/* Additional Actions */}
      <div className="flex justify-center gap-4 mt-8">
        <Button variant="ghost" size="sm">
          <Download className="mr-2 h-4 w-4" />
          下載收據
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          分享
        </Button>
      </div>

      {/* Important Information */}
      <Card className="mt-12 bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-4">重要資訊</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📧 訂單確認信已發送至您的電子郵箱</p>
            <p>📱 我們將以簡訊通知您商品到貨資訊</p>
            <p>🏪 請攜帶身分證件至門市取貨</p>
            <p>🔒 所有商品採用隱私包裝，保護您的隱私</p>
            <p>💯 享有7天鑑賞期，如有問題可聯繫客服</p>
          </div>
        </CardContent>
      </Card>

      {/* Customer Service */}
      <div className="text-center mt-8">
        <p className="text-muted-foreground text-sm mb-2">
          如有任何問題，歡迎聯繫客服
        </p>
        <p className="font-medium">
          客服專線：0800-123-456
        </p>
        <p className="text-sm text-muted-foreground">
          服務時間：週一至週五 9:00-18:00
        </p>
      </div>
    </div>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">載入訂單資訊...</p>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}
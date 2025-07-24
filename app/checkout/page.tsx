"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formatPrice, generateOrderId } from '@/lib/utils'
import type { CustomerInfo, StoreInfo } from '@/lib/types'
import { 
  ArrowLeft, 
  ShoppingCart, 
  CreditCard, 
  CheckCircle,
  MapPin,
  Search
} from 'lucide-react'

// 步驟指示器
const steps = [
  { id: 1, title: '購物車', completed: true },
  { id: 2, title: '填寫資料', completed: false, current: true },
  { id: 3, title: '確認訂單', completed: false },
]

// 模擬7-11門市資料
const stores: StoreInfo[] = [
  { id: 'taipei001', name: '台北信義門市', address: '台北市信義區信義路五段7號' },
  { id: 'taipei002', name: '台北東區門市', address: '台北市大安區忠孝東路四段181號' },
  { id: 'taipei003', name: '台北西門門市', address: '台北市萬華區成都路10號' },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    email: ''
  })
  const [selectedStore, setSelectedStore] = useState<StoreInfo | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 模擬購物車資料
  const cartItems = [
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
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0)
  const shipping = 6000
  const total = subtotal + shipping

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!customerInfo.name.trim()) {
      newErrors.name = '請填寫姓名'
    }
    
    if (!customerInfo.phone.trim()) {
      newErrors.phone = '請填寫電話號碼'
    } else if (!/^09\d{8}$/.test(customerInfo.phone.replace(/\D/g, ''))) {
      newErrors.phone = '請填寫正確的手機號碼格式'
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = '請填寫電子郵件'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = '請填寫正確的電子郵件格式'
    }

    if (!selectedStore) {
      newErrors.store = '請選擇取貨門市'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // 模擬提交處理
    setTimeout(() => {
      const orderId = generateOrderId()
      router.push(`/order-confirmation?id=${orderId}`)
    }, 1500)
  }

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }))
    // 清除該欄位的錯誤
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl fade-in">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/cart">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回購物車
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-foreground">結帳</h1>
      </div>

      {/* Steps Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step.completed 
                  ? 'bg-primary border-primary text-primary-foreground'
                  : step.current
                  ? 'border-primary text-primary bg-background'
                  : 'border-muted-foreground text-muted-foreground bg-background'
              }`}>
                {step.completed ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <span className={`ml-2 font-medium ${
                step.current ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className="w-16 h-0.5 bg-border mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>客戶資訊</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      姓名 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`input-field ${errors.name ? 'border-destructive' : ''}`}
                      placeholder="請輸入您的姓名"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      手機號碼 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`input-field ${errors.phone ? 'border-destructive' : ''}`}
                      placeholder="09xxxxxxxx"
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    電子郵件 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`input-field ${errors.email ? 'border-destructive' : ''}`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Store Selection */}
            <Card>
              <CardHeader>
                <CardTitle>7-11 取貨門市</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    選擇門市 <span className="text-destructive">*</span>
                  </Label>
                  <Select onValueChange={(value) => {
                    const store = stores.find(s => s.id === value)
                    setSelectedStore(store || null)
                    if (errors.store) {
                      setErrors(prev => ({ ...prev, store: '' }))
                    }
                  }}>
                    <SelectTrigger className={`input-field ${errors.store ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="請選擇取貨門市" />
                    </SelectTrigger>
                    <SelectContent>
                      {stores.map((store) => (
                        <SelectItem key={store.id} value={store.id}>
                          <div>
                            <div className="font-medium">{store.name}</div>
                            <div className="text-sm text-muted-foreground">{store.address}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.store && (
                    <p className="text-xs text-destructive">{errors.store}</p>
                  )}
                </div>

                {/* Selected Store Display */}
                {selectedStore && (
                  <div className="p-4 bg-muted rounded-lg border">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">{selectedStore.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedStore.address}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>訂單摘要</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">數量: {item.quantity}</p>
                      </div>
                      <p className="text-sm">{formatPrice(item.subtotal)}</p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">商品總計</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">運費</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>總計</span>
                  <span className="price-display">{formatPrice(total)}</span>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      處理中...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      確認訂單
                    </>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>✓ 安全加密處理</p>
                  <p>✓ 隱私資料保護</p>
                  <p>✓ 7天鑑賞期保障</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
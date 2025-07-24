// 商品介面定義
export interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
  description?: string
  category?: string
  inStock?: boolean
}

// 購物車商品介面
export interface CartItem {
  id: number
  name: string
  price_in_cents: number
  image_url: string
  quantity: number
  subtotal: number
}

// 購物車介面
export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

// 訂單客戶資訊介面
export interface CustomerInfo {
  name: string
  phone: string
  email: string
}

// 7-11 門市資訊介面
export interface StoreInfo {
  id: string
  name: string
  address: string
}

// 訂單介面
export interface Order {
  id: string
  items: CartItem[]
  customerInfo: CustomerInfo
  storeInfo?: StoreInfo
  subtotal: number
  shipping: number
  total: number
  status: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled'
  createdAt: Date
}

// 產品分類介面
export interface Category {
  id: string
  name: string
  description: string
  image_url: string
  productCount: number
}
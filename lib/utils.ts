import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Product, CartItem } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 將價格從分轉換為格式化的新台幣字符串
 * @param cents - 以分為單位的價格
 * @returns 格式化的價格字符串（如 "NT$ 2,980"）
 */
export function formatPrice(cents: number): string {
  const dollars = cents / 100
  return `NT$ ${dollars.toLocaleString('zh-TW')}`
}

/**
 * 計算購物車商品的小計
 * @param price_in_cents - 單價（分）
 * @param quantity - 數量
 * @returns 小計（分）
 */
export function calculateSubtotal(price_in_cents: number, quantity: number): number {
  return price_in_cents * quantity
}

/**
 * 計算購物車總金額
 * @param items - 購物車商品列表
 * @returns 總金額（分）
 */
export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.subtotal, 0)
}

/**
 * 生成模擬的訂單編號
 * @returns 訂單編號
 */
export function generateOrderId(): string {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `#2024${timestamp.toString().slice(-6)}${random}`
}

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/lib/types'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: number) => void
  showAddToCart?: boolean
}

export function ProductCard({ 
  product, 
  onAddToCart,
  showAddToCart = true
}: ProductCardProps) {
  const isInStock = product.inStock !== false

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent link navigation
    if (onAddToCart && isInStock) {
      onAddToCart(product.id)
    }
  }

  return (
    <Card className="product-card h-full overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.image_url}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Stock Status Badge */}
          <div className="absolute top-2 right-2">
            <Badge variant={isInStock ? "default" : "secondary"} className={isInStock ? "status-in-stock" : "status-out-of-stock"}>
              {isInStock ? "有貨" : "缺貨"}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          {/* Product Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2">
            {product.name}
          </h3>
          
          {/* Product Category */}
          {product.category && (
            <p className="text-sm text-muted-foreground mb-2">
              {product.category}
            </p>
          )}
          
          {/* Product Price */}
          <p className="price-display text-lg">
            {formatPrice(product.price_in_cents)}
          </p>
        </CardContent>
      </Link>
      
      {/* Add to Cart Button */}
      {showAddToCart && (
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            disabled={!isInStock}
            className="w-full btn-primary"
            variant={isInStock ? "default" : "secondary"}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isInStock ? "加入購物車" : "暫無庫存"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
export interface Product {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  discount?: boolean
  category?: string
  rating?: number
}

'use client'
import AboutStatsSection from '@/components/AboutStatsSection'
import Banner from '@/components/banner'
import ProductCard from '@/components/ProductCrad'
import { Product } from '@/components/ProductCrad/types'
import { Box } from '@mui/material'
import { FiAward, FiGlobe, FiThumbsUp, FiUser } from 'react-icons/fi'

export default function Home() {
  // Images matching the reference, assuming you have similar images in public
  const bannerImages = [
    '/images/banner/ca_chim.png', // Salmon image
    '/images/banner/ca_thu.jpg', // Fish plate image
    '/images/banner/tom.png', // Meat image
  ]

  // Best seller products data
  const bestSellerProducts: Product[] = [
    {
      id: '1',
      name: 'Ground Beef',
      image: '/images/product/caloc.jpg',
      price: 80.0,
      originalPrice: 99.0,
      discount: true,
      category: 'Meat',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Midwest Medley',
      image: '/images/product/camevinh.webp',
      price: 40.0,
      originalPrice: 59.0,
      discount: true,
      category: 'Fish',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Fresh Hamour',
      image: '/images/product/tom.jpg',
      price: 70.0,
      originalPrice: 89.0,
      discount: true,
      category: 'Fish',
      rating: 4.6,
    },
    {
      id: '1',
      name: 'Ground Beef',
      image: '/images/product/caloc.jpg',
      price: 80.0,
      originalPrice: 99.0,
      discount: true,
      category: 'Meat',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Midwest Medley',
      image: '/images/product/camevinh.webp',
      price: 40.0,
      originalPrice: 59.0,
      discount: true,
      category: 'Fish',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Fresh Hamour',
      image: '/images/product/tom.jpg',
      price: 70.0,
      originalPrice: 89.0,
      discount: true,
      category: 'Fish',
      rating: 4.6,
    },
    {
      id: '1',
      name: 'Ground Beef',
      image: '/images/product/caloc.jpg',
      price: 80.0,
      originalPrice: 99.0,
      discount: true,
      category: 'Meat',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Midwest Medley',
      image: '/images/product/camevinh.webp',
      price: 40.0,
      originalPrice: 59.0,
      discount: true,
      category: 'Fish',
      rating: 4.8,
    },
  ]

  const handleViewDetail = (product: Product) => {
    console.log('View detail for product:', product.name)
    // Here you can add navigation to product detail page or open a modal
    // For example: router.push(`/products/${product.id}`)
  }

  return (
    <Box>
      <Banner
        images={bannerImages}
        title="Food Quality And Safety Are Guaranteed"
        // subtitle="We maintain strict quality control for all our seafood products"
        actionText="LEARN MORE"
      />
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Box
          component="h2"
          sx={{
            fontSize: '28px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            mb: 1,
            color: '#008236',
          }}
        >
          Our Products
        </Box>
        <Box
          sx={{
            width: '60px',
            height: '3px',
            bgcolor: 'oklch(52.7% 0.154 150.069)',
            mx: 'auto',
            mb: 3,
          }}
        />

        {/* Product Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2 }}>
          {bestSellerProducts.map((product, index) => (
            <Box key={index} sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }}>
              <ProductCard
                active={index % 2 == 0}
                product={product}
                onViewDetail={handleViewDetail}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <AboutStatsSection
        stats={[
          {
            id: 'q',
            Icon: FiThumbsUp,
            value: 'QUALITY',
            label: 'We ensure top-tier food safety and quality.',
          },
          {
            id: 's',
            Icon: FiAward,
            value: 'SERVICE',
            label: 'Customer-first service with innovative solutions.',
          },
          {
            id: 'c',
            Icon: FiUser,
            value: 'CUSTOMER',
            label: 'Safe, reliable, cost-effective products and services.',
          },
          {
            id: 'm',
            Icon: FiGlobe,
            value: 'MARKET',
            label: 'Exporting diverse seafood to markets worldwide.',
          },
        ]}
        // eyebrow="Premium Seafood Import & Export"
        heading="We Deliver The Freshest Seafood Products From Ocean To Your Table"
        // description="With over 15 years of experience in sustainable aquaculture..."
        button={{ text: 'Learn More About Us', onClick: () => (window.location.href = '/about') }}
      />
      {/* <CoreValues /> */}
    </Box>
  )
}

'use client'
import * as React from 'react'
import { Product } from './types'
import { Box, Typography, Card, CardContent, Button } from '@mui/material'

export interface ProductCardProps {
  product: Product
  onViewDetail?: (product: Product) => void
  active?: boolean
}

export default function ProductCard({ active, product, onViewDetail }: ProductCardProps) {
  return (
    <Card
      sx={{
        width: '100%',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'white',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* Heart Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 2,
          width: 32,
          height: 32,
          bgcolor: active ? 'rgba(255, 255, 255, 0.9)' : 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          transform: active ? 'scale(1.2)' : 'scale(1)',
          '&:hover': {
            bgcolor: 'white',
            transform: 'scale(1.2)',
          },
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: '16px',
            color: active ? '#ef4444' : '#e5e7eb',
            transform: active ? 'scale(1.2)' : 'scale(1)',
            '&:hover': {
              color: '#ef4444',
              transform: 'scale(1.2)',
            },
          }}
        >
          ♡
        </Box>
      </Box>

      {/* Product Image */}
      <Box
        sx={{
          height: 180,
          overflow: 'hidden',
          bgcolor: '#f9fafb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>

      {/* Card Content */}
      <CardContent sx={{ p: 3, textAlign: 'center' }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            mb: 2,
            color: '#374151',
            lineHeight: 1.4,
            textAlign: 'left',
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#6b7280',
            mb: 3,
            lineHeight: 1.5,
            fontSize: '14px',
            textAlign: 'left',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>

        {/* View Detail Button */}
        <Box sx={{ textAlign: 'left' }}>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation()
              onViewDetail?.(product)
            }}
            sx={{
              bgcolor: '#16a34a',
              color: 'white',
              py: 1,
              px: 2,
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: 999,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              '&:hover': {
                bgcolor: '#15803d',
              },
            }}
          >
            View Detail
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

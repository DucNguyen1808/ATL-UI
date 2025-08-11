'use client'

import { Box } from '@mui/material'
import * as React from 'react'

export interface SliderProps {
  slides: string[]
  children?: React.ReactNode
  height?: string | number
  autoPlayInterval?: number
  renderOverlay?: (index: number) => React.ReactNode
}

export default function Slider({
  slides,
  children,
  height = '480px',
  autoPlayInterval = 5000,
  renderOverlay,
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [slides.length, autoPlayInterval])

  if (slides.length === 0) return null

  return (
    <Box
      sx={{
        position: 'relative',
        height,
        overflow: 'hidden',
      }}
    >
      {/* Background slides */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.2)), url(${slide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 1,
          }}
        />
      ))}

      {/* Content overlay */}
      {children && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {renderOverlay ? renderOverlay(currentSlide) : children}
        </Box>
      )}

      {/* Dots indicator - only show if more than 1 slide */}
      {slides.length > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 3,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'scale(1.2)',
                },
              }}
            />
          ))}
        </Box>
      )}

      {/* Navigation arrows - only show if more than 1 slide */}
      {slides.length > 1 && (
        <>
          <Box
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            sx={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            ‹
          </Box>

          <Box
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            sx={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 3,
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            ›
          </Box>
        </>
      )}
    </Box>
  )
}

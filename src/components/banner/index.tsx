'use client'
import { Box, Button, Typography } from '@mui/material'

interface BannerProps {
  images?: string[]
  title?: string
  subtitle?: string
  actionText?: string
  onAction?: () => void
}

export default function Banner({
  images = [
    '/images/slides/slide-1.jpg',
    '/images/slides/slide-2.webp',
    '/images/slides/slide-1.jpg',
  ],
  title = 'Food Quality And Safety Are Guaranteed',
  subtitle,
  actionText = 'LEARN MORE',
  onAction = () => console.log('Learn more clicked'),
}: BannerProps) {
  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        height: { xs: 'auto', md: '350px' },
      }}
    >
      {/* First Image - 25% width */}
      <Box
        sx={{
          flex: { xs: 1, md: '25%' },
          height: { xs: '200px', md: '100%' },
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={images[0]}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          alt="Premium seafood"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.16)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Second Image - 25% width */}
      <Box
        sx={{
          flex: { xs: 1, md: '25%' },
          height: { xs: '200px', md: '100%' },
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={images[1]}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          alt="Fresh fish"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.16)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Third Image with Text Overlay - 50% width */}
      <Box
        sx={{
          flex: { xs: 1, md: '50%' },
          position: 'relative',
          height: { xs: '240px', md: '100%' },
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={images[2]}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85)',
          }}
          alt="Quality meat"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            p: 3,
            textAlign: 'left',
            bgcolor: 'rgba(0,0,0,0.16)',
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              color: 'white',
              fontWeight: 600,
              mb: 1,
              textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              maxWidth: '90%',
              textShadow: '1px 1px 2px rgba(0,0,0,0.16)',
            }}
          >
            {subtitle}
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={onAction}
            sx={{
              mt: 2,
              // bgcolor: '#16a34a',
              // '&:hover': {
              //   bgcolor: '#347350',
              // },
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
            }}
            className="bg-green-700 hover:bg-emerald-800"
          >
            {actionText}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

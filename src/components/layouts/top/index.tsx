'use client'
import BannerBreadcrumb from '@/components/breadcrumb'
import Slider from '@/components/slider'
import { Home } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import { usePathname } from 'next/navigation'
import Header from '../header'

export default function Top() {
  const pathname = usePathname()
  const slides = ['/images/slides/slide-1.jpg', '/images/slides/slide-2.webp']

  return pathname == '/' ? (
    <Slider slides={slides} height="560px" autoPlayInterval={5000}>
      <>
        <Header />
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            flex: 1,
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '75%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              // height: 'auto',
              textAlign: 'left',
              // width: { xs: '100%', md: '80%' },
              // padding: { xs: 2, md: 4 },
            }}
            className="flex-3/4"
          >
            <Box
              sx={{
                padding: { xs: 4, md: 8 },
                width: '80%',
              }}
            >
              <Box
                component="h1"
                sx={{
                  fontSize: { xs: '2.2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 800,
                  mb: 1,
                  color: '#f8fafc',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Premium Fishery Products
              </Box>
              <Box
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' },
                  fontWeight: 700,
                  mb: 1,
                  mt: 1,
                  color: '#16a34a',
                  letterSpacing: '0.03em',
                }}
              >
                FOR A GREEN LIFE
              </Box>
              <Box
                component="p"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem', lg: '1.3rem' },
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: '#f8fafc',
                  maxWidth: 550,
                }}
              >
                Leading sustainable aquaculture innovation with 15+ years of expertise, creating
                premium seafood while protecting our planet's future.
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    </Slider>
  ) : (
    <Box
      sx={{
        position: 'relative',
        height: '480px',
        overflow: 'hidden',
      }}
    >
      <BannerBreadcrumb
        crumbs={[
          { label: 'Home', icon: <Home />, href: '/' },
          { label: 'About us', icon: <Home />, href: '/' },
        ]}
        title="About Us"
        subtitle="Bringing the Ocean's Freshness to the World"
        backgroundImage="/images/breadcrumb/bcr-about.png"
      >
        <Header />
      </BannerBreadcrumb>
    </Box>
  )
}

import Footer from '@/components/layouts/footer'
import theme from '@/themes'
import { Box, Container } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { TbMessageChatbot } from 'react-icons/tb'

import Top from '@/components/layouts/top'
import './globals.css'
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})
export const metadata: Metadata = {
  title: 'Hung Thinh',
  description: 'Hung Thinh Long Xuyen Limited Company',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Top></Top>
              <Container
                maxWidth="lg"
                component="main"
                sx={{
                  flex: 1,
                  py: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {children}
              </Container>
              <Footer />
            </div>
            <Box
              sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                backgroundColor: '#16a34a',
                color: 'white',
                borderRadius: '50%',
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                zIndex: 1000,
                '&:hover': {
                  backgroundColor: '#15803d',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <TbMessageChatbot size={24} />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

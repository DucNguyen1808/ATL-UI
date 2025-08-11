'use client'

import { Box, Container, MenuItem, Select } from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import HeaderItem from './components/HeaderItem'
import Search from './components/Search'

const headerItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'News', href: '/news' },
  { label: 'Environment', href: '/environment' },
  { label: 'Plant Area', href: '/plant-area' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]
export default function Header() {
  const [language, setLanguage] = React.useState('vi')
  const pathname = usePathname()

  return (
    <Box sx={{ pt: 3 }}>
      <Container
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          border: 'none',
          paddingY: 2,
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
        }}
        maxWidth="lg"
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Image
              alt="Hung Thinh Logo"
              src="/images/logo/logo-hung-thinh.webp"
              width={100}
              height={40}
              priority
              className="object-cover"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {headerItems.map((item, index) => (
              <HeaderItem
                content={item.label}
                href={item.href}
                key={index}
                active={pathname === item.href}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Search />
            <Select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value)
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: 'none',
                    mt: 1,
                    '& .MuiMenuItem-root': {
                      color: 'white',
                      fontSize: '18px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(47, 107, 81, 0.8)',
                        '&:hover': {
                          backgroundColor: 'rgba(47, 107, 81, 0.9)',
                        },
                      },
                    },
                  },
                },
              }}
              sx={{
                minWidth: 60,
                width: 70,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                fontSize: '18px',
                color: 'white',
                '& .MuiSelect-select': {
                  padding: '8px 16px',
                  textAlign: 'center',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-icon': {
                  color: 'white',
                },
              }}
            >
              <MenuItem value="vi">VN</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { GiTrophyCup } from 'react-icons/gi'
import { AiOutlineLike } from 'react-icons/ai'
import { FaLightbulb, FaUserLarge } from 'react-icons/fa6'

interface CoreValue {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

export default function CoreValues() {
  const coreValues: CoreValue[] = [
    {
      id: '1',
      icon: <AiOutlineLike />,
      title: 'QUALITY',
      description:
        'Our commitment to quality assurance is paramount to our business. We ensure high levels of food safety and quality management...',
    },
    {
      id: '2',
      icon: <GiTrophyCup />,
      title: 'SERVICE',
      description:
        'We commit ourselves to identify the needs of our valuable customers, deliver innovated products and services to foster loyalty and trust...',
    },
    {
      id: '3',
      icon: <FaUserLarge />,
      title: 'CUSTOMER',
      description:
        'We are totally committed to providing our customers with safe, reliable and cost effective products and services...',
    },
    {
      id: '4',
      icon: <FaLightbulb />,
      title: 'MARKET',
      description:
        'The company has a proven track record in exporting all varieties of fish and fishery products to several countries.',
    },
  ]

  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          gap: 2,
          overflowX: { xs: 'auto', md: 'visible' },
        }}
      >
        {coreValues.map((value) => (
          <Box
            key={value.id}
            sx={{
              width: { xs: '240px', md: '240px' },
              minWidth: '240px',
              textAlign: 'center',
              px: 1,
              flexShrink: 0,
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
                fontSize: '32px',
                color: 'white',
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)',
              }}
            >
              {value.icon}
            </Box>

            {/* Title */}
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#374151',
                fontSize: '16px',
                letterSpacing: '1px',
              }}
            >
              {value.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: '#6b7280',
                lineHeight: 1.6,
                fontSize: '14px',
              }}
            >
              {value.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

'use client'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

export type Feature = {
  icon?: React.ReactNode
  title: string
  desc?: string
}

export interface WhyChooseUsProps {
  badge?: string
  heading?: string
  years?: number
  features?: Feature[]
  digitImages?: string[]
  rightFlagText?: string
  ribbonText?: string
}

// Two Unsplash photos as sensible defaults
const defaultDigitImages = [
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1935&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1935&auto=format&fit=crop',
]

export default function WhyChooseUs({
  badge = 'Why choose us',
  heading = 'People why choose our travel adventure',
  years = 30,
  features = [],
  digitImages = defaultDigitImages,
  rightFlagText,
  ribbonText,
}: WhyChooseUsProps) {
  // Determine items (prefer caller-provided features)
  const items = features
  const digits = String(years).split('')

  return (
    <Box component="section" className="relative">
      <Grid container spacing={4} className="mx-auto py-10 lg:py-16" justifyItems={'flex-start'}>
        {/* Left Column */}
        <Grid size={{ xs: 12, lg: 6 }}>
          {badge ? (
            <Chip
              label={badge}
              size="medium"
              className="bg-green-100 text-green-800 font-semibold rounded-lg px-3"
            />
          ) : null}

          <Stack spacing={3} className="max-w-xl mt-4">
            <Typography
              variant="h2"
              className="font-semibold leading-tight tracking-tight text-slate-900"
              sx={{ fontSize: { xs: 28, sm: 34, md: 42 } }}
            >
              {heading}
            </Typography>

            <Divider className="!my-2 !opacity-0" />

            {/* Features grid */}
            <Grid container spacing={3}>
              {items.map((f, idx) => (
                <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                  <Stack direction="row" spacing={2}>
                    <Box className="flex h-11 w-11 items-center justify-center rounded-xl">
                      {f.icon}
                    </Box>
                    <Box>
                      <Typography className="font-semibold text-gray-900">{f.title}</Typography>
                      {f.desc && <Typography className="text-gray-500 mt-1">{f.desc}</Typography>}
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>

        {/* Right Column: Big number with photo-fill and badges */}
        <Grid size={{ xs: 12, lg: 6 }} className="relative">
          <Box className="relative inset-0 flex items-center justify-center">
            <div
              className="flex select-none leading-none [&>span+span]:-ml-[0.10em]"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {digits.map((d, i) => (
                <span
                  key={`${d}-${i}`}
                  className="text-transparent bg-clip-text font-extrabold drop-shadow-sm"
                  style={{
                    fontSize: 'clamp(180px, 36vw, 420px)',
                    lineHeight: 1,
                    backgroundImage: `url(${digitImages[i % digitImages.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: i === 0 ? 'center left' : 'center',
                    marginRight: i === digits.length - 1 ? 0 : '0em',
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </Box>
          {rightFlagText && (
            <Box className="absolute right-[6%] top-[4.5%] z-10">
              <span
                className="uppercase tracking-[0.20em] font-medium text-slate-800/80"
                style={{
                  fontSize: 'clamp(14px, 2.4vw, 30px)',
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.75)',
                }}
              >
                {rightFlagText}
              </span>
            </Box>
          )}

          {ribbonText ? (
            <Box className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 z-10">
              <span
                className="inline-flex items-center rounded-full
                 bg-white/40 backdrop-blur-md md:backdrop-blur-lg
                 px-4 md:px-5 py-2
                 text-sm md:text-lg font-medium text-slate-800/80
                 shadow"
              >
                {ribbonText}
              </span>
            </Box>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  )
}

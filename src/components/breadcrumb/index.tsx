'use client'

import {
  Box,
  Breadcrumbs,
  Container,
  Link as MuiLink,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import NextLink from 'next/link'
import * as React from 'react'
import { FaChevronRight, FaHome } from 'react-icons/fa'

export type Crumb = { label: string; href?: string; icon?: React.ReactNode }

type BannerBreadcrumbProps = {
  /** Big title on the banner */
  title: string
  /** Optional subtitle under the title */
  subtitle?: string
  /** Background image URL (public/ or remote) */
  backgroundImage: string
  /** Breadcrumb items (first item can be Home) */
  crumbs?: Crumb[]
  /** Optional extra sx for root box */
  sx?: SxProps<Theme>
  children?: React.ReactNode
}

export default function BannerBreadcrumb({
  title,
  subtitle,
  backgroundImage,
  crumbs = [{ label: 'Home', href: '/', icon: <FaHome /> }],
  sx,
  children,
}: BannerBreadcrumbProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 1.5s ease-in-out',
        zIndex: 1,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        minHeight: { xs: 200, sm: 260, md: 320 },
        // background image + dark overlay
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        gap: 4,
        ...sx,
      }}
    >
      {children && <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>}

      <Container>
        {/* Breadcrumb line */}
        {crumbs.length > 0 && (
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<FaChevronRight size={12} />}
            sx={{ color: 'rgba(255,255,255,.9)', '& a': { color: 'inherit' } }}
          >
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1 || !c.href
              if (isLast) {
                return (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ opacity: 0.9, display: 'flex', gap: 0.75, alignItems: 'center' }}
                  >
                    {c.icon}
                    {c.label}
                  </Typography>
                )
              }
              return (
                <MuiLink
                  key={i}
                  component={NextLink}
                  href={c.href!}
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {c.icon}
                  {c.label}
                </MuiLink>
              )
            })}
          </Breadcrumbs>
        )}

        {/* Title + Subtitle */}
        <Box sx={{ mt: 1.5 }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h6"
              sx={{ mt: 1, fontWeight: 400, opacity: 0.95, lineHeight: 1.4 }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}

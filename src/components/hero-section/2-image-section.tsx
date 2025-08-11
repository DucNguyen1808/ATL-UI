'use client'

import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export type Feature = { icon: React.ReactNode; title: string; description?: string }

export type TwoImageSectionProps = {
  badge?: string
  title: React.ReactNode
  checks?: string[]
  features?: Feature[]
  // Animated stat
  statStart?: number
  statEnd?: number
  statDurationMs?: number
  statSuffix?: string
  statCaption?: string
  // images
  leftImageSrc: string
  rightImageSrc: string
  // optional bg map for stat
  statBackgroundUrl?: string // default '/map-dots.svg'
}

/* Start counting only when visible */
function useInView(ref: React.RefObject<Element | null>, rootMargin = '0px', threshold = 0.25) {
  const [inView, setInView] = React.useState(false)
  React.useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), {
      root: null,
      rootMargin,
      threshold,
    })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, rootMargin, threshold])
  return inView
}

/* Count-up with easing + guard */
function useCountUp({
  start = 0,
  end,
  duration = 1500,
  run = true,
}: {
  start?: number
  end: number
  duration?: number
  run?: boolean
}) {
  const [value, setValue] = React.useState(start)
  React.useEffect(() => {
    if (!run) {
      setValue(start)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const delta = end - start
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
    const step = () => {
      const t = Math.min(1, (performance.now() - t0) / duration)
      const eased = easeOutCubic(t)
      const next = Math.round(start + delta * eased)
      setValue(next > end ? end : next)
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, end, duration, run])
  return value
}

export default function TwoImageSection({
  badge,
  title,
  checks,
  features,
  statStart = 0,
  statEnd = 20,
  statDurationMs = 1500,
  statSuffix = '+',
  statCaption = 'LOCATIONS WORLD WIDE',
  leftImageSrc,
  rightImageSrc,
  statBackgroundUrl,
}: TwoImageSectionProps) {
  // In-view trigger for stat
  const statRef = React.useRef<HTMLDivElement>(null)
  const visible = useInView(statRef)
  const count = useCountUp({
    start: statStart,
    end: statEnd,
    duration: statDurationMs,
    run: visible,
  })

  const [bounce, setBounce] = React.useState(false)
  React.useEffect(() => {
    if (visible && count >= statEnd) {
      setBounce(true)
      const t = setTimeout(() => setBounce(false), 600)
      return () => clearTimeout(t)
    }
  }, [visible, count, statEnd])

  return (
    <Box component="section" className="py-10 md:py-16">
      <Container>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 6, lg: 8 }}
          alignItems={{ lg: 'flex-start' }}
        >
          {/* Left column: text */}
          <Box className="flex-1">
            {badge ? (
              <Chip
                label={badge}
                size="medium"
                className="bg-green-100 text-green-800 font-semibold rounded-lg px-3"
              />
            ) : null}

            <Typography
              component="h2"
              className="mt-4 font-extrabold text-gray-900 leading-tight"
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              {title}
            </Typography>

            {checks?.length ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checks.map((c, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white shadow-sm"
                  >
                    <FaCheckCircle
                      className="shrink-0"
                      aria-hidden
                      style={{ color: 'var(--primary)' }}
                    />
                    <span className="font-medium text-gray-800">{c}</span>
                  </Paper>
                ))}
              </div>
            ) : null}

            {features?.length ? (
              <Stack spacing={3} className="mt-8">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#D65472] text-white flex items-center justify-center text-xl">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{f.title}</p>
                      {f.description && <p className="text-gray-500 mt-1">{f.description}</p>}
                    </div>
                  </div>
                ))}
              </Stack>
            ) : null}
          </Box>

          {/* Right column: images (left block contains stat) */}
          <Box className="flex-1">
            <div className="grid grid-cols-2 gap-6 items-start">
              {/* LEFT IMAGE with green strip + stat below (like design) */}
              <div>
                <div className="rounded-tl-[120px] overflow-hidden">
                  <Image
                    src={leftImageSrc}
                    alt="Image left"
                    width={520}
                    height={520}
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="w-full h-[300px] md:h-[360px] lg:h-[380px] object-cover"
                  />
                </div>
                {/* green strip */}
                <div className="h-[8px] bg-green-600 rounded-b-[28px]" />

                {/* stat on map background */}
                <div
                  ref={statRef}
                  className="mt-2 py-2 text-center"
                  style={{
                    backgroundImage: `url(${statBackgroundUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backdropFilter: 'saturate(180%) blur(10px)',
                  }}
                >
                  <div
                    className={[
                      'text-5xl text-green-600 font-extrabold flex justify-center items-start gap-1',
                      bounce ? 'animate-bounce' : 'animate-none',
                    ].join(' ')}
                  >
                    <span className="text-8xl">{visible ? count : statStart}</span>
                    {statSuffix && <span className="text-5xl">{statSuffix}</span>}
                  </div>
                  <div
                    className="mt-1 tracking-wide font-semibold text-gray-700"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {statCaption}
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE – taller, rounded top corners */}
              <div className="overflow-hidden rounded-tr-[120px] rounded-b-[10px]">
                <Image
                  src={rightImageSrc}
                  alt="Image right"
                  width={520}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="w-full h-[460px] md:h-[520px] object-cover"
                />
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

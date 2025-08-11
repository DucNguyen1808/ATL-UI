import { Handshake } from '@mui/icons-material'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import * as React from 'react'
import type { IconType } from 'react-icons'
import { FiArrowUpRight } from 'react-icons/fi'
import { TbFileText, TbHome2, TbReceipt, TbReceiptTax } from 'react-icons/tb'

export interface StatItem {
  id: string | number
  Icon: IconType
  value: string // "645+"
  label: string // "Meetings So For"
}

interface SectionProps {
  stats?: StatItem[]
  badge?: React.ReactNode
  heading?: string
  description?: string
  button?: { text: string; onClick?: () => void }
}

export default function AboutStatsSection({
  stats = [
    { id: 1, Icon: TbReceiptTax, value: '645+', label: 'Meetings So For' },
    { id: 2, Icon: TbReceipt, value: '562+', label: 'Meetings So For' },
    { id: 3, Icon: TbHome2, value: '34+', label: 'Meetings So For' },
    { id: 4, Icon: TbFileText, value: '90%', label: 'Meetings So For' },
  ],
  badge = (
    <Box className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-md text-emerald-800">
      <Handshake className="mr-2" /> We Are Here For Your Tax Relief.
    </Box>
  ),
  heading = 'We Handle The Most Tedious Bookkeeping Tasks of Your Business Operations.',
  description,
  button = { text: 'More About Us', onClick: () => {} },
}: SectionProps) {
  return (
    <Box className="relative py-14 md:py-20">
      <Box
        aria-hidden
        className="
    pointer-events-none absolute -z-10
    right-[-6%] top-[6px]
    h-[560px] w-[1100px]
    rounded-[36px]
    bg-[radial-gradient(520px_360px_at_60%_40%,rgba(16,185,129,0.16),rgba(16,185,129,0.08)_46%,transparent_72%)]
  "
      />

      <Container maxWidth="lg" className="relative z-10">
        <Box className="flex flex-col gap-10 md:flex-row md:gap-16 items-center">
          {/* LEFT */}
          <Box className="w-full md:flex-1">
            {badge}
            <Typography
              component="h2"
              className="mt-5 font-bold leading-[1.1] text-slate-900 text-5xl"
            >
              {heading}
            </Typography>
            <Typography className="mt-4 max-w-[620px] text-base leading-7 text-gray-600">
              {description}
            </Typography>
            <Button
              onClick={button.onClick}
              variant="contained"
              disableElevation
              endIcon={<FiArrowUpRight className="text-2xl" />}
              className="mt-7 rounded-xl uppercase bg-green-700 px-5 py-3 text-base font-bold text-white hover:bg-emerald-800"
            >
              {button.text}
            </Button>
          </Box>

          {/* RIGHT */}
          <Box className="relative w-full md:flex-1">
            {/* radial glow */}
            {/* <Box className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(600px_420px_at_40%_40%,rgba(16,185,129,0.16),rgba(16,185,129,0.08)_45%,transparent_75%)]" /> */}

            {/* doodles */}
            <svg
              viewBox="0 0 120 120"
              className="absolute -top-6 left-2 -z-10 h-16 w-16 text-emerald-300 md:left-6 md:h-20 md:w-20"
            >
              <path
                d="M6 78c22-34 44-54 78-64M54 18c6 9 18 14 30 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <svg
              viewBox="0 0 140 40"
              className="absolute -bottom-6 right-4 -z-10 h-8 w-36 text-emerald-300"
            >
              <path
                d="M4 20c34 6 76 8 132 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* grid 2x2; cột phải lệch xuống */}
            <Box className="grid max-w-[520px] grid-cols-1 sm:grid-cols-2 gap-6 md:ml-auto">
              {stats.map((s, i) => (
                <Box key={s.id} className={i % 2 === 1 ? 'md:translate-y-10' : ''}>
                  <StatCard Icon={s.Icon} value={s.value} label={s.label} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

/* ----- Card kiểu Hình 2: icon tròn -> số lớn -> caption ----- */
function StatCard({ Icon, value, label }: Pick<StatItem, 'Icon' | 'value' | 'label'>) {
  return (
    <Card
      elevation={0}
      className="relative flex flex-col items-center rounded-2xl border border-emerald-100/70 bg-white px-8 py-9 text-center shadow-[0_14px_40px_rgba(16,185,129,0.14),_0_4px_12px_rgba(16,185,129,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(16,185,129,0.18),_0_8px_18px_rgba(16,185,129,0.10)]"
      sx={{ borderRadius: '18px' }}
    >
      <Box className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
        <Icon size={26} />
      </Box>

      <div className="text-2xl font-bold uppercase leading-none tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-2 text-[16px] leading-6 text-gray-600">{label}</div>
    </Card>
  )
}

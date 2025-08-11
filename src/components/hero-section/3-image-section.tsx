'use client'

import { Typography } from '@mui/material'
import Chip from '@mui/material/Chip'
import Image from 'next/image'
import * as React from 'react'
import * as FaIcons from 'react-icons/fa'

export type TimelineItem = {
  title: string
  description: string
  icon?: React.ReactNode
}

export type ThreeImageSectionProps = {
  badge?: string
  title: React.ReactNode
  items?: TimelineItem[]
  topLeftSrc: string
  topRightSrc: string
  bottomSrc: string
}

export default function ThreeImageSection({
  badge = 'Who We Are',
  title,
  items = [],
  topLeftSrc,
  topRightSrc,
  bottomSrc,
}: ThreeImageSectionProps) {
  return (
    <section className="py-2 md:py-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* BENTO GRID */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {/* BENTO GRID */}
            <div
              className="grid gap-4 md:gap-6
                grid-cols-1
                md:grid-cols-3 md:grid-rows-6 md:h-[520px]"
            >
              {/* Trái – nhỏ (cao 3/6) */}
              <BentoImage
                src={topLeftSrc}
                alt="top-left"
                className="aspect-[4/5] md:aspect-auto md:col-span-1 md:row-span-3"
              />

              {/* Phải – lớn (cao 4/6) */}
              <BentoImage
                src={topRightSrc}
                alt="top-right"
                className="aspect-[4/3] md:aspect-auto md:col-span-2 md:row-span-4"
              />

              {/* Dưới – banner (cao 2/6, tràn 3 cột) */}
              <BentoImage
                src={bottomSrc}
                alt="bottom-wide"
                className="aspect-[21/9] md:aspect-auto md:col-span-3 md:row-span-2"
              />
            </div>
          </div>

          {/* TEXT / TIMELINE */}
          <div className="col-span-12 lg:col-span-6">
            {badge ? (
              <Chip
                label={badge}
                size="medium"
                className="bg-green-100 text-green-800 font-semibold rounded-lg px-3"
              />
            ) : null}

            <Typography
              component="h2"
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900"
            >
              {title}
            </Typography>

            <div className="mt-10 relative">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-[84px] md:left-[96px] border-l-2 border-dashed border-gray-200 z-0"
              />

              <div className="flex flex-col gap-5 relative z-10">
                {items.map((it, idx) => {
                  return (
                    <div
                      key={idx}
                      className="relative grid grid-cols-[28px_96px_1fr] md:grid-cols-[32px_112px_1fr] gap-x-2 items-center py-2"
                    >
                      <FaIcons.FaCheckCircle className="text-2xl text-[#D65472]" />

                      <div className="relative flex items-center justify-center">
                        <div className="relative z-10 w-18 h-18 rounded-full bg-white shadow-sm flex items-center justify-center border-2 border-green-200">
                          <div className="text-green-600 text-3xl">{it.icon}</div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        {/* <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
                        <p className="mt-2 text-gray-500 leading-relaxed max-w-xl">
                          {it.description}
                        </p> */}
                        <p className="font-semibold text-gray-900">{it.title}</p>
                        {it.description && <p className="text-gray-500 mt-1">{it.description}</p>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BentoImage({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm',
        className,
      ].join(' ')}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="h-full w-full object-cover object-center"
        priority={alt === 'top-right'}
      />
    </div>
  )
}

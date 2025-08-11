import { Typography } from '@mui/material'
import Link from 'next/link'

export interface HeaderItemProps {
  active?: boolean
  content: string
  href?: string
}

export default function HeaderItem({ active, content, href }: HeaderItemProps) {
  const itemContent = (
    <Typography
      component="div"
      sx={{
        cursor: 'pointer',
        backgroundColor: active ? '#347350' : 'transparent',
        color: active ? '#fff' : 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: active ? 600 : 500,
        textAlign: 'center',
        minWidth: 'fit-content',
        whiteSpace: 'nowrap',
        '&:hover': active
          ? {
              backgroundColor: 'rgba(47, 107, 81, 0.9)',
              color: '#fff',
            }
          : {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
            },
        transition: 'all 0.3s ease',
      }}
    >
      {content}
    </Typography>
  )

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none' }}>
        {itemContent}
      </Link>
    )
  }

  return itemContent
}

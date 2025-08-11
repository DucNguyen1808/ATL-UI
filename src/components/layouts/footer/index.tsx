import { Box, Container, Paper, Stack, Tooltip, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import Grid from '@mui/system/Grid'
import Image from 'next/image'
import NextLink from 'next/link'
import { MdOutlineMailOutline, MdOutlineRoom } from 'react-icons/md'
import { columns, footerContent, legalLinks, linkHoverClass } from './menu'

export default function Footer() {
  return (
    <Box component="footer" sx={{ position: 'relative', color: '#fff' }}>
      {/* Background image + dark overlay */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url('/images/footer/bg-footer.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Footer content */}
      <Container sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
        {/* Top row: Logo + Columms + Contact */}
        <Stack alignItems="center" spacing={2} mb={{ xs: 4, md: 6 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box>
              <Image
                alt="Hung Thinh Logo"
                src="/images/logo/logo_edit.png"
                width={180}
                height={180}
                priority
              />
            </Box>
            <Typography variant="h5" fontWeight={700}>
              {footerContent.companyName}
            </Typography>
          </Stack>
        </Stack>

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          columns={15}
          mb={{ xs: 5, md: 8 }}
          justifyContent="space-between"
        >
          {columns.map((col) => (
            <Grid key={col.title} spacing={{ xs: 5, sm: 3.75, md: 3 }} columns={5}>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                gutterBottom
                sx={{ xs: 5, sm: 3, mb: 2 }}
              >
                {col.title}
              </Typography>
              <Stack spacing={1} sx={{ lineHeight: 2 }}>
                {col.links.map((l) => (
                  <FooterLink key={l.label} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </Stack>
            </Grid>
          ))}
          <Grid spacing={{ xs: 7.5, sm: 3.75, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              {footerContent.contactTitle}
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <MdOutlineRoom size={18} />
                <Typography
                  variant="body2"
                  sx={{ textTransform: 'capitalize', whiteSpace: 'pre-line' }}
                >
                  {footerContent.address}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <MdOutlineMailOutline size={18} />
                <FooterLink href={`mailto:${footerContent.email}`}>
                  {footerContent.email}
                </FooterLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 6, md: 10 },
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'saturate(180%) blur(10px)',
            px: { xs: 2, sm: 2 },
            py: { xs: 2, sm: 2 },
          }}
        >
          <Stack direction="row" justifyContent="center" mb={1.5}>
            <Typography variant="h6" fontWeight={700} className="text-white">
              {footerContent.followUsTitle}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" spacing={1} gap={{ xs: 5, sm: 3, md: 2 }}>
            <Social
              icon={<Image src="/images/icon/icon-zalo.png" alt="Zalo" width={80} height={80} />}
              label="Zalo"
              color="#0068FF"
            />
            <Social
              icon={
                <Image src="/images/icon/icon-wechat.png" alt="WeChat" width={80} height={80} />
              }
              label="WeChat"
              color="#2dc100"
            />
            <Social
              icon={
                <Image src="/images/icon/icon-whatsapp.png" alt="WhatsApp" width={80} height={80} />
              }
              label="WhatsApp"
              color="#10c03e"
            />
            <Social
              icon={
                <Image src="/images/icon/icon-telegram.png" alt="Telegram" width={80} height={80} />
              }
              label="Telegram"
              color="#26A5E4"
            />
          </Stack>
        </Paper>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Typography variant="caption">© {2025} All Rights Reserved</Typography>
          <Stack direction="row" flexWrap="wrap" useFlexGap spacing={2}>
            {legalLinks.map((l) => (
              <FooterLink key={l.label} href={l.href} variant="caption">
                {l.label}
              </FooterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

function FooterLink({
  href,
  children,
  variant = 'body2',
}: React.PropsWithChildren<{ href: string; variant?: 'body2' | 'caption' }>) {
  return (
    <MuiLink
      component={NextLink}
      href={href}
      underline="none"
      sx={{
        color: '#fff',
        opacity: 0.9,
        fontSize: variant === 'caption' ? '0.875em' : '0.975em',
      }}
      variant={variant}
      className={linkHoverClass}
    >
      {children}
    </MuiLink>
  )
}

function Social({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <Tooltip
      title={label}
      arrow
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: color,
            color: '#fff',
            fontSize: '1em',
          },
        },
        arrow: {
          sx: {
            color: color,
          },
        },
      }}
    >
      <IconButton
        aria-label={label}
        className="w-20 h-20 rounded-full text-white hover:bg-white/10"
      >
        {icon}
      </IconButton>
    </Tooltip>
  )
}

import TwoImageSection from '@/components/hero-section/2-image-section'
import ThreeImageSection from '@/components/hero-section/3-image-section'
import NumberImageSection from '@/components/hero-section/number-image-secion'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaDollarSign, FaHandshake, FaMoneyCheckAlt, FaShieldAlt } from 'react-icons/fa'
import { FaBoxesStacked } from 'react-icons/fa6'
import { GiShakingHands } from 'react-icons/gi'
import { LuPackageCheck } from 'react-icons/lu'
import { MdEqualizer } from 'react-icons/md'
import { TiWorld } from 'react-icons/ti'

export default function Home() {
  // const years = new Date().getFullYear() - 2019
  return (
    <>
      {/* Nội dung trang ... */}
      <TwoImageSection
        badge="About Company"
        title={<>Building Tomorrow's Aquaculture</>}
        checks={['Committed to quality', 'Long-term cooperation']}
        features={[
          {
            icon: <FaShieldAlt />,
            title: 'Top quality products',
            description: 'Founded in 2019, over 15 years of seafood processing experience.',
          },
          {
            icon: <FaDollarSign />,
            title: 'Modern factory',
            description: 'Own factory 10 tons/day, partnership output 200 tons/month.',
          },
          {
            icon: <FaBoxesStacked />,
            title: 'Trusted global partner',
            description: 'Exporting to USA, EU, Australia, Middle East, Africa & Asia...',
          },
        ]}
        statCaption="export countries"
        statBackgroundUrl="/images/about/bg-3.png"
        leftImageSrc="/images/about/bg-1.png"
        rightImageSrc="/images/about/bg-2.png"
      />

      <ThreeImageSection
        badge="Who We Are"
        title={<>Seafood processing & export from Vietnam</>}
        items={[
          {
            title: 'Safety First Always',
            description: 'Strict food safety & quality management.',
            icon: <AiFillSafetyCertificate />,
          },
          {
            title: 'Low price & stable supply',
            description: 'Reliable products with optimized cost.',
            icon: <FaMoneyCheckAlt />,
          },
          {
            title: 'Trusted export partner',
            description: 'Proven track record across multiple seafood SKUs.',
            icon: <FaHandshake />,
          },
        ]}
        topLeftSrc="/images/about/bg-6.png"
        topRightSrc="/images/about/bg-5.png"
        bottomSrc="/images/about/bg-4.png"
      />

      <NumberImageSection
        years={15}
        badge="Why choose us"
        heading="Your Satisfaction, Our Reputation"
        features={[
          {
            icon: <TiWorld className="text-green-500 text-3xl" />,
            title: 'Global Export Footprint',
            desc: 'USA, EU, Australia, Middle East, Africa & Asia...',
          },
          {
            icon: <MdEqualizer className="text-green-500 text-3xl" />,
            title: 'Quality First',
            desc: 'Premium, consistent products.',
          },
          {
            icon: <LuPackageCheck className="text-green-500 text-3xl" />,
            title: 'Reliable Supply',
            desc: 'Scalable for large and repeat orders.',
          },
          {
            icon: <GiShakingHands className="text-green-500 text-3xl" />,
            title: 'Win-Win Partnerships',
            desc: 'Long-term, sustainable collaboration.',
          },
        ]}
        digitImages={['/images/about/bg-7.png', '/images/about/bg-7.png']}
        rightFlagText="YEAR"
        ribbonText="of experience"
      />
    </>
  )
}

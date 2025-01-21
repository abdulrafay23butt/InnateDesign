import React from 'react'
import ReactMarquee from 'react-fast-marquee'

import { cn } from '@/libs/utils/twMerge'
import Image from 'next/image'

interface Props {
  className?: string
}

const Marquee = (props: Props) => {
  const { className, ...rest } = props

  // Define image URLs and their specific widths
  const imageData = [
    // { url: "/images/home/bt.png", width: 45 },
    // { url: "/images/home/marvin 2.png", width: 226 },
    // { url: "/images/home/dt 2.png", width: 143 },
    // { url: "/images/home/ad 2.png", width: 268 },
    // { url: "/images/home/bt.png", width: 45 },
    // { url: "/images/home/marvin 2.png", width: 226 },
    // { url: "/images/home/dt 2.png", width: 143 },
    { url: '/images/home/abc.png', width: 268, height: 100 },
    { url: '/images/home/ad.png', width: 268, height: 100 },
    { url: '/images/home/bt1.png', width: 95, height: 100 },
    { url: '/images/home/dt.png', width: 178, height: 100 },
    { url: '/images/home/JH.png', width: 278, height: 100 },
    { url: '/images/home/js.png', width: 228, height: 100 },
    { url: '/images/home/lic.png', width: 168, height: 100 },
    { url: '/images/home/marvin.png', width: 226, height: 100 },
    { url: '/images/home/mg.png', width: 188, height: 100 },
    { url: '/images/home/NU.png', width: 158, height: 100 },
    { url: '/images/home/tt.png', width: 366, height: 100 },
    { url: '/images/home/Xactimate.png', width: 98, height: 100 },
  ]

  // Duplicate the images for seamless scrolling
  const duplicatedImageData = [...imageData, ...imageData]

  return (
    <div className="pb-14 overflow-hidden">
      <ReactMarquee {...rest} className="flex items-center">
        {duplicatedImageData.map((image, index) => (
          <Image
            src={image.url}
            alt={`Brand ${index + 1}`}
            className={(cn('mx-10 mob:mx-4'), className)}
            key={index}
            width={image.width}
            height={image.height} // You can modify height independently if needed
          />
        ))}
      </ReactMarquee>
    </div>
  )
}

export default Marquee

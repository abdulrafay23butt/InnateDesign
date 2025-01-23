'use client'
import React, { useEffect, useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'

const WorkSlider0 = dynamic(() => import('@/components/Work/WorkSlider0'), {
  ssr: false,
})
const WorkSlider1 = dynamic(() => import('@/components/Work/WorkSlider1'), {
  ssr: false,
})
const WorkSlider2 = dynamic(() => import('@/components/Work/WorkSlider2'), {
  ssr: false,
})
const WorkSlider3 = dynamic(() => import('@/components/Work/WorkSlider3'), {
  ssr: false,
})
const WorkSlider4 = dynamic(() => import('@/components/Work/WorkSlider4'), {
  ssr: false,
})
const WorkSlider5 = dynamic(() => import('@/components/Work/WorkSlider5'), {
  ssr: false,
})
const WorkSlider6 = dynamic(() => import('@/components/Work/WorkSlider6'), {
  ssr: false,
})
const WorkSlider7 = dynamic(() => import('@/components/Work/WorkSlider7'), {
  ssr: false,
})
const WorkSlider8 = dynamic(() => import('@/components/Work/WorkSlider8'), {
  ssr: false,
})
const WorkSlider9 = dynamic(() => import('@/components/Work/WorkSlider9'), {
  ssr: false,
})
const WorkSlider10 = dynamic(() => import('@/components/Work/WorkSlider10'), {
  ssr: false,
})
const WorkSlider11 = dynamic(() => import('@/components/Work/WorkSlider11'), {
  ssr: false,
})
const WorkSlider12 = dynamic(() => import('@/components/Work/WorkSlider12'), {
  ssr: false,
})
const WorkSlider13 = dynamic(() => import('@/components/Work/WorkSLider13'), {
  ssr: false,
})
const WorkSlider14 = dynamic(() => import('@/components/Work/WorkSlider14'), {
  ssr: false,
})

const WorkPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false // Check if the device is mobile
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const smoothScroll = () => {
      const targetScrollY = window.scrollY
      setScrollY((prevScrollY) => {
        const diff = targetScrollY - prevScrollY
        if (Math.abs(diff) < 1) return targetScrollY
        return prevScrollY + diff * 0.1 // Adjust the smoothing factor (0.1) as needed
      })
      animationFrameRef.current = requestAnimationFrame(smoothScroll)
    }

    smoothScroll()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const components = [
    WorkSlider0,
    WorkSlider1,
    WorkSlider2,
    WorkSlider3,
    WorkSlider4,
    WorkSlider5,
    WorkSlider6,
    WorkSlider7,
    WorkSlider8,
    WorkSlider9,
    WorkSlider10,
    WorkSlider11,
    WorkSlider12,
    WorkSlider13,
    WorkSlider14,
  ]

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="relative">
        {components.map((Component, index) => {
          const start = index * windowHeight
          const end = (index + 1) * windowHeight * (isMobile ? 32 : 16) // Adjust multiplier based on screen size

          // Calculate translateY for each section
          const translateY =
            scrollY >= start && scrollY < end
              ? -(scrollY - start)
              : scrollY >= end
              ? -windowHeight
              : 0

          return (
            <div
              key={index}
              style={{
                transform: `translateY(${translateY}px)`,
                position: 'fixed',
                zIndex: components.length - index,
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                transition: 'transform 0.03s ease-out',
              }}
            >
              <Component />
            </div>
          )
        })}
      </div>
      {/* Spacer to allow scrolling */}
      <div style={{ height: `${components.length * 100}vh` }} />
    </div>
  )
}

export default WorkPage

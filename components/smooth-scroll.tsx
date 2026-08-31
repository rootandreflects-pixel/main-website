'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with premium inertia settings
    const lenis = new Lenis({
      duration: 1.3, // Soft, luxurious duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 0.95, // Softly weighted wheel multiplier
      touchMultiplier: 1.4, // Natural response for mobile touch scrolling
    })

    let animationFrameId: number

    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    // Clean up
    return () => {
      lenis.destroy()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <>{children}</>
}

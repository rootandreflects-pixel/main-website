'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fade-in')
  const previousPathname = useRef(pathname)

  useEffect(() => {
    // If the path actually changes, run the fade transition
    if (pathname !== previousPathname.current) {
      setTransitionStage('fade-out')
      
      const timer = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('fade-in')
        previousPathname.current = pathname
      }, 250) // Premium fast easing duration

      return () => clearTimeout(timer)
    }
  }, [pathname, children])

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        transitionStage === 'fade-in'
          ? 'opacity-100 translate-y-0 filter-none'
          : 'opacity-0 translate-y-3 blur-[2px]'
      }`}
    >
      {/* Top glowing line loader */}
      <div
        className={`fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/40 via-primary to-accent z-[9999] transition-transform duration-300 origin-left ${
          transitionStage === 'fade-out' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
      />
      {displayChildren}
    </div>
  )
}

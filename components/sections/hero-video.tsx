"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Reload video when switching between mobile/desktop
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [isMobile])

  return (
    <div className="absolute inset-0">

      {/* Poster image — shown until video is ready */}
      <Image
        src={isMobile ? "/images/images/kasas-limited-mobile-hero.webp" : "/images/images/kasas-limited-air-charter-services.webp"}
        alt=""               // decorative — empty alt is correct here
        fill
        priority             // above fold — always preload
        className={`object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src={isMobile ? "/videos/air-charters-to-mara.mp4" : "/videos/kasas-kenya-air-charter-aviation-and-training.mp4"}
          type="video/mp4"
        />
      </video>

      {/* Dark overlay so text stays readable */}
      {/* <div className="absolute inset-0 bg-black/25" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    </div>
  )
}
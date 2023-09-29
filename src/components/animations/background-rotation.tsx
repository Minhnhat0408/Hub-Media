"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"

export default function BackgroundRotation() {
  const [rotation, setRotation] = useState({})
  const [lastProgress, setLastProgress] =useState(0)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: 2,
    detailsChanged(s) {
      const progress = s.track.details.progress
      const delta = lastProgress - progress
      setLastProgress(progress)
      setRotation(delta * 360)
    },
    loop: true,
  })

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${rotation}deg, black 0px, black 50%, white 50%, white 100%)`,
      }}
      className="background-rotation h-[500px] w-2/3"
      ref={sliderRef}
    >
      <div
        className="background-rotation__inner h-full"
        style={{
          backgroundImage: `linear-gradient(${rotation}deg, white 0px, white 50%, black 50%, black 100%)`,
        }}
      >
        <span>keen-slider</span>
      </div>
    </div>
  )
}

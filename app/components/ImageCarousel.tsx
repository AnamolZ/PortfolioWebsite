'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface CarouselImage {
  src: string
  alt: string
}

interface HeadingItem {
  line1: string
  line2: string
}

interface ImageCarouselProps {
  images?: CarouselImage[]
  items?: HeadingItem[]
  isHeading?: boolean
}

export default function ImageCarousel({ images, items, isHeading = false }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsArray = images || items || []

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsArray.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [itemsArray.length])

  if (isHeading && items) {
    return (
      <div className="owl-carousel3">
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <h2>
              <span>{item.line1}</span>
              <span>{item.line2}</span>
            </h2>
          </div>
        ))}
      </div>
    )
  }

  if (images) {
    return (
      <div className="owl-carousel3">
        {images.map((image, index) => (
          <div
            key={index}
            className="item"
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <Image
              className="img-responsive about-img"
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              priority={index === 0}
              style={{ borderRadius: '5px' }}
            />
          </div>
        ))}
      </div>
    )
  }

  return null
}

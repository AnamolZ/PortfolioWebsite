'use client'

import { useEffect } from 'react'
import ImageCarousel from './ImageCarousel'

export default function AboutSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const elements = document.querySelectorAll('.animate-box')
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.85
          if (isVisible && !element.classList.contains('animated')) {
            element.classList.add('fadeInUp', 'animated')
          }
        })
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const profileImages = [
    { src: '/images/about.jpg', alt: 'Anamol Profile Image First' },
    { src: '/images/about-2.jpg', alt: 'Anamol Profile Image Second' }
  ]

  const headings = [
    { line1: "I'm Anamol", line2: 'Dhakal' },
    { line1: '', line2: 'Backend System Developer' }
  ]

  return (
    <div id="colorlib-about">
      <div className="container">
        <div className="row">
          <div className="col-md-5 animate-box">
            <ImageCarousel images={profileImages} />
          </div>
          <div className="col-md-6 col-md-push-1 animate-box">
            <ImageCarousel items={headings} isHeading={true} />
            <div className="desc">
              <div className="rotate">
                <h2 className="heading">About</h2>
              </div>
              <p>
                As a seasoned Python developer with over
                <a href="#" style={{ textDecoration: 'none' }}> years</a> of diverse experience in solo and community projects.
                My expertise, cultivated through personal endeavors, open-source contributions on GitHub, and freelance work, reflects a deep-seated commitment to continuous learning.
                Driven by curiosity and a relentless pursuit of excellence, I am eager to leverage my well-rounded skill set to contribute meaningfully to your team&apos;s objectives.
                With a proven track record of delivering tangible results and an insatiable appetite for new challenges,
                I am excited about the opportunity to make a valuable impact within your organization.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/anamol-dhakal-2a4a21232/" className="btn btn-primary btn-outline">Contact Me!</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://drive.google.com/file/d/193bYyXfOqDzZfRBQ_-GACjvUbaTMMi52/view?usp=sharing" className="btn btn-primary btn-outline">Download CV</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

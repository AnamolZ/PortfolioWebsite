'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer>
      <div className="container">
        <div className="col-md-12 text-center">
          <p>
            &copy; {currentYear} All rights reserved.{' '}
            <i id="heart" className="icon-heart4" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </footer>
  )
}

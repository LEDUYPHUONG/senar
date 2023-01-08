import React from 'react'
import CarouselHomepage from '../component/header/CarouselHomepage'
import Header from '../component/header/Header'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="container-carousel">
        <CarouselHomepage />
      </div>
    </div>
  )
}
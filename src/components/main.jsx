import React from 'react'
import Nav from './nav'
import Hero from './hero'
import Testimonials from './testimonials'
import Project from './project'
import Footer from './footer'
const main = () => {
  return (
    <>
        <div className='bg-indigo-600'>
            <Nav/>
            <Hero/>
            <Project/>
            <Testimonials/>
            <Footer/>
        </div>
    </>
  )
}

export default main
import React from 'react'
import NewsCont1 from './NewsCont1';
import Hero from './Hero';
import DoctorsCards from './DoctorsCards';
import ClinicsCards from './ClinicsCards';

function Home() {
  return (
    <div>
    <Hero />
    <DoctorsCards />
    <NewsCont1 />
    <ClinicsCards />
    </div>
  )
}

export default Home
import React from 'react'
import WorkSlider1 from '@/components/Work/WorkSlider1'
import WorkSlider2 from '@/components/Work/WorkSlider2'
import WorkSlider3 from '@/components/Work/WorkSlider3'
import Navbar from '@/components/Navbar'

const WorkPage = () => {
  return (
    <div className=''>
       <Navbar />
      <WorkSlider1/>
      <WorkSlider2/>
      <WorkSlider3/>
    </div>
  )
}

export default WorkPage
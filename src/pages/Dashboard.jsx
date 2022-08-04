import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Navbars from '../components/Navbars'

export default function Dashboard() {
  return (
    <>
      <Navbars/>
    <div className='p-5'>
      <Banner/>
    <div className='flex h-screen justify-center items-center'>
        <h1 className='font-bold text-8xl'>COMING SOON !!!!!</h1>
    </div>
      <Cards/>
    </div>
    </>
  )
}

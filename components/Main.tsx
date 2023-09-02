"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Main = () => {
    const handleScroll = () => {}
  return (
    <div className='main'>
        <div className="flex-1 pt-36 sm:px-16 px-6">
            <h1 className="header-text">
                Find your 2023/2024 university classes.
            </h1>
            <p className="subheader-text">
                We help you find the best classes for your schedule.
            </p>

            <CustomButton 
            title="Get Started"
            containerStyles="bg-prim-blue w-40 text-white font-bold rounded-full mt-10"
            handleClick={() => {handleScroll}}
            />
        </div>
        <div className="img-cont">
            <div className="img">
                <Image src="/unicorn.png" alt="landing-image" fill className='object-contain'/>
            </div>
            <div className="img-overlay"></div>
        </div>
    </div>
  )
}

export default Main

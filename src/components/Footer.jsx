'use client'
import React, { use } from 'react'

const Footer = () => {
  return (
    <>
        <footer className='bg-gray-800 text-white py-4 text-center w-full'>

            <div className='logo font-bold text-lg'>
                <span className='text-green-700'>&lt;</span>
                <span>Pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </div>
            <div>
                Created with <span className='text-red-500'>❤</span> by Priya Pandey 
            </div>
        </footer>
    </>
  )
}

export default Footer
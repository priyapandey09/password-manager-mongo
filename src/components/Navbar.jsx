'use client'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white fixed top-0 left-0 right-0 z-50'>
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-3">
          <div className='logo font-bold text-lg'>
            <span className='text-green-700'>&lt;</span>
            <span>Pass</span>
            <span className='text-green-700'>OP/&gt;</span>
          </div>
          {/* <ul>
              <li className='flex gap-4'>
                  <a className='hover:font-bold' href="#">Home</a>
                  <a className='hover:font-bold' href="#">About</a>
                  <a className='hover:font-bold' href="#">Contact</a>
              </li>
          </ul> */}
          <div>
            <button className="text-white bg-green-700 my-5 rounded-md flex items-center p-1 px-3 justify-between gap-2"> Github
              <img src="icons/github.svg" alt="GitHub" className='invert w-8 h-8 cursor-pointer' />
            </button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
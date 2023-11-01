import React from 'react'

function Nav() {
  return (
    <div className='border border-white border-b-black mx-12'>
        <ul className='list-none flex justify-end items-center first-letter  h-16 relative'>
            <li className='mx-10'>
                Home
            </li>
            <li className='mx-10'>
                About Us
            </li>
            <li className='mx-10'>
                Pages
            </li>
            <li className='mx-10'>
                Portfolio
            </li>
            <li className='mx-10'>
                Contact
            </li>
            <li className='mx-10'>
                <div className='border border-black rounded-full w-12 h-12 rounded-full flex flex-col items-center'>
                   <div className='mt-1 text-[20px]'>
                    ---
                   </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Nav
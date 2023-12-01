import React from 'react'
import Navbar from '../(components)/Navbar/page'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className='bg-gray-50 dark:bg-black'>
    <div className='text-center font-bold text-6xl'> our store</div>
        <div className='grid grid-cols-2'>
            <div>
               <div className='bg-blue-400 p-10 dark:bg-purple-950 '>
                 <h1>Shop By Categories</h1>
                 <h2>Men</h2>
                 <h2>Women</h2>
                 <h2>Childrens</h2>
                 <h2>Todler</h2>
                </div> 
            </div>
            <div>

            </div>
        </div>
        </div>
    </>
  )
}

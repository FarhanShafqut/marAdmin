import React from 'react'
import Topcard from './(components)/Topcard'
import Barchart from './(components)/Barchart'
import Recentorder from './(components)/Recentorder'

export default function page() {
  return (
    <div>
      <Topcard/>
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <Barchart/>
        <Recentorder/>
      </div>
    </div>
  )
}

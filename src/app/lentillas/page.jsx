import { LentillasGrid } from '@/components/LentillasGrid'
import { LentillasHeader } from '@/components/LentillasHeader'
import Lorem from '@/helpers/Lorem'
import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-20 bg-white text-black">
      <LentillasHeader/>
      <LentillasGrid/>
    </div>
  )
}

export default page
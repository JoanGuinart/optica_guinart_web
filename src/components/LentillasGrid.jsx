import React from 'react'

export const LentillasGrid = () => {
  return (
    <div className='w-full flex justify-center mt-20'>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full px-20 text-center">
            <div className="border-2 h-96">x</div>
            <div className="border-2 h-96">y</div>
            <div className="border-2 h-96">z</div>
            <div className="border-2 h-96">w</div>
            <div className="border-2 h-96">y</div>
            <div className="border-2 h-96">x</div>
        </div>
    </div>
  )
}

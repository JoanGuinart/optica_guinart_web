import Image from 'next/image'
import React from 'react'
import lentillaGraduadaUno from "../img/lentilla-graduada.jpg"
import lentillaGraduadaDos from "../img/lentilla-grduada-2.jpeg"
import lentillaGraduadaTres from "../img/lentilla-graduada-3.webp"
import lentillaGraduadaCuatro from "../img/lentillas-progresivas.png"
import lentillaColor from "../img/lentilla-color.jpg"
import lentillaCosmetica from "../img/lentilla-cosmetica.jpg"

export const LentillasGrid = () => {
  return (
    <div className='w-full flex justify-center mt-20'>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full lg:px-40 px-3 text-center">
            <div className="h-96">
              <Image className='w-full h-full object-cover rounded-md hover:scale-95' src={lentillaGraduadaUno} alt='lentilla' />
              <span>Lentilles Diaries</span>
            </div>
            <div className="h-96">
              <Image className='w-full h-full object-cover rounded-md hover:scale-95' src={lentillaGraduadaTres} alt='lentilla' />
              <span>Lentilles 15 díes</span>
            </div>
            <div className="h-96">
              <Image className='w-full h-full object-cover rounded-md hover:scale-95' src={lentillaGraduadaDos} alt='lentilla' />
              <span>Lentilles mensuals</span>
            </div>
            <div className="h-96">
              <Image className='w-full h-full object-cover rounded-md hover:scale-95' src={lentillaGraduadaCuatro} alt='lentilla' />
              <span>Lentillas d&apos;us prolongat</span>
            </div>
            <div className="h-96">
              <Image className='w-full h-full object-cover rounded-md hover:scale-95' src={lentillaColor} alt='lentilla' />
              <span>Lentillas de color</span>
            </div>
            <div className="h-96">
              <Image className='w-full h-full object-cover rounded-md hover:scale-95' src={lentillaCosmetica} alt='lentilla' />
              <span>Lentillas cosmètiques</span>
            </div>
        </div>
    </div>
  )
}

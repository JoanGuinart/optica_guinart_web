import Image from 'next/image'
import React from 'react'
import Audifono from '../img/audifono_1.jpg'
import lentillaGraduadaDos from '../img/lentilla-grduada-2.jpeg'
import lentillaGraduadaTres from '../img/lentilla-graduada-3.webp'
import lentillaGraduadaCuatro from '../img/lentillas-progresivas.png'
import lentillaColor from '../img/lentilla-color.jpg'
import lentillaCosmetica from '../img/lentilla-cosmetica.jpg'

export const AudiofonosGrid = () => {
	return (
		<div className='w-full flex justify-center mt-20'>
			<div class='grid lg:grid-cols-3 grid-cols-1 gap-8 w-full lg:px-40 px-3 text-center'>
				<div className='h-96'>
					<Image
						className='w-full h-full object-cover rounded-md hover:scale-95'
						src={Audifono}
						alt='lentilla'
					/>
					<span>Audiòfons 1</span>
				</div>
				<div className='h-96'>
					<Image
						className='w-full h-full object-cover rounded-md hover:scale-95'
						src={Audifono}
						alt='lentilla'
					/>
					<span>Audiòfons 2</span>
				</div>
				<div className='h-96'>
					<Image
						className='w-full h-full object-cover rounded-md hover:scale-95'
						src={Audifono}
						alt='lentilla'
					/>
					<span>Audiòfons 3</span>
				</div>
				<div className='h-96'>
					<Image
						className='w-full h-full object-cover rounded-md hover:scale-95'
						src={Audifono}
						alt='lentilla'
					/>
					<span>Audiòfons 4</span>
				</div>
				<div className='h-96'>
					<Image
						className='w-full h-full object-cover rounded-md hover:scale-95'
						src={Audifono}
						alt='lentilla'
					/>
					<span>Audiòfons 5</span>
				</div>
				<div className='h-96'>
					<Image
						className='w-full h-full object-cover rounded-md hover:scale-95'
						src={Audifono}
						alt='lentilla'
					/>
					<span>Audiòfons 6</span>
				</div>
			</div>
		</div>
	)
}

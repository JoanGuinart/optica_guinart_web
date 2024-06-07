import { AudiofonosGrid } from '@/components/AudiofonosGrid'
import { AudiofonosHeader } from '@/components/AudiofonosHeader'
import React from 'react'

const page = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-between py-20 bg-white text-black'>
			<AudiofonosHeader />
			<AudiofonosGrid />
		</div>
	)
}

export default page

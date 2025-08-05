'use client'

import Link from 'next/link'

import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import { useState } from 'react'
import Navdrawer from './NavDrawer'

const MobileNav = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const handleMenuClick = () => {
		setMenuOpen((prev) => !prev)
	}

	return (
		<div className='lg:hidden bg-white shadow-md sticky top-0 z-50 px-4 sm:px-8 md:px-12'>
			<div className='flex justify-between items-center h-20'>
				<Link
					href='/'
					className='text-2xl font-bold text-teal-600'
				>
					EasyTech
				</Link>

				<button
					onClick={handleMenuClick}
					className='text-gray-800 hover:text-teal-600 transition cursor-pointer'
				>
					<AppsRoundedIcon fontSize='large' />
				</button>
			</div>

			<Navdrawer
				isOpen={menuOpen}
				onClose={handleMenuClick}
			/>
		</div>
	)
}

export default MobileNav

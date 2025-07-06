'use client'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Link from 'next/link'

import { useState } from 'react'
import Navdrawer from './NavDrawer'

const MobileNav = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const handleMenuClick = () => {
		setMenuOpen((prev) => !prev)
	}

	return (
		<div className='lg:hidden bg-white shadow-md sticky top-0 z-50'>
			<div className='flex justify-between items-center px-4 h-16'>
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
					<MenuRoundedIcon fontSize='large' />
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

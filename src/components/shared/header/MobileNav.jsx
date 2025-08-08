'use client'

import Link from 'next/link'
import { useState } from 'react'

import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import Navdrawer from './NavDrawer'

const MobileNav = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')

	const handleMenuClick = () => {
		setMenuOpen((prev) => !prev)
	}

	const handleSearchClick = () => {
		setSearchOpen((prev) => !prev)
		setSearchQuery('')
	}

	const handleSearchSubmit = (e) => {
		e.preventDefault()
		if (searchQuery.trim()) {
			console.log('Searching for:', searchQuery)
			// You can use router.push(`/search?query=${searchQuery}`) if using Next.js routing
		}
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

				<div className='flex justify-center items-center gap-4'>
					{/* Search Button */}
					<button
						onClick={handleSearchClick}
						className='py-2 cursor-pointer text-gray-800 hover:text-teal-600 transition'
					>
						{searchOpen ? <CloseIcon /> : <SearchIcon />}
					</button>

					{/* Menu Button */}
					<button
						onClick={handleMenuClick}
						className='text-gray-800 hover:text-teal-600 transition cursor-pointer'
					>
						<AppsRoundedIcon fontSize='large' />
					</button>
				</div>
			</div>

			{/* Search Input */}
			{searchOpen && (
				<div className='pb-2'>
					<form
						onSubmit={handleSearchSubmit}
						className='mb-4'
					>
						<input
							type='text'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder='Search...'
							className='w-full px-4 py-2 border-b border-gray-400 focus:border-gray-400 outline-none'
						/>
					</form>
				</div>
			)}

			<Navdrawer
				isOpen={menuOpen}
				onClose={handleMenuClick}
			/>
		</div>
	)
}

export default MobileNav

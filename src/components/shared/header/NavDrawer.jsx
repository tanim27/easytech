'use client'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import gsap from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Courses', path: '/courses' },
	{ name: 'Our Agency', path: '/agency' },
	{ name: 'Freelancers Story', path: '/freelancers-story' },
	{ name: 'Success Story', path: '/success-story' },
	{ name: 'Student Reviews', path: '/student-reviews' },
	{ name: 'FAQs', path: '/frequently-asked-questions' },
	{ name: 'About Us', path: '/about-us' },
	{ name: 'Contact Us', path: '/contact-us' },
]

const Navdrawer = ({ isOpen, onClose }) => {
	const pathname = usePathname()
	const drawerRef = useRef(null)
	const backdropRef = useRef(null)

	const isActive = (path) => pathname === path

	useEffect(() => {
		if (isOpen) {
			gsap.to(drawerRef.current, {
				x: 0,
				duration: 0.4,
				ease: 'power3.out',
			})
			gsap.to(backdropRef.current, {
				autoAlpha: 1,
				duration: 0.3,
			})
		} else {
			gsap.to(drawerRef.current, {
				x: '100%',
				duration: 0.4,
				ease: 'power3.in',
			})
			gsap.to(backdropRef.current, {
				autoAlpha: 0,
				duration: 0.3,
			})
		}
	}, [isOpen])

	return (
		<>
			<div
				ref={backdropRef}
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-100 ${
					isOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
				onClick={onClose}
			/>

			<div
				ref={drawerRef}
				className='fixed top-0 right-0 h-full w-[80%] sm:w-[350px] z-50 p-6 bg-white rounded-l-xl shadow-2xl flex flex-col transform translate-x-full'
			>
				<div className='flex justify-end'>
					<button
						onClick={onClose}
						className='text-[#111111] hover:text-teal-600 p-2 rounded-full hover:bg-gray-100 transition duration-300 cursor-pointer'
					>
						<CloseRoundedIcon fontSize='large' />
					</button>
				</div>

				<nav className='mt-6 flex-1 overflow-y-auto'>
					<ul className='flex flex-col divide-y divide-gray-200'>
						{menuItems.map((item) => (
							<li key={item.name}>
								<Link
									href={item.path}
									onClick={onClose}
									className={`block px-4 py-4 text-base font-medium transition duration-200 ${
										isActive(item.path)
											? 'text-teal-600 border-l-4 border-teal-600 bg-[#f0fdfc]'
											: 'text-[#111111] hover:text-teal-600 hover:bg-gray-100'
									}`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Navdrawer

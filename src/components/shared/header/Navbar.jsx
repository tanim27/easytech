'use client'

import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Courses', path: '/courses' },
	{ name: 'Our Agency', path: '/agency' },
	{ name: 'Freelancers Story', path: '/freelancers-story' },
	{ name: 'Success Story', path: '/success-story' },
	{ name: 'Student Reviews', path: '/student-reviews' },
	{ name: 'Events', path: '/events' },
	{ name: 'About', path: '/about-us' },
	{ name: 'Contact', path: '/contact-us' },
]

const Navbar = () => {
	const pathname = usePathname()
	const isActive = (path) => pathname === path

	return (
		<>
			{/* Desktop Navbar */}
			<header className='hidden lg:flex bg-white shadow-md sticky top-0 z-50'>
				<div className='w-full h-24 px-8 py-16 flex flex-col justify-center items-center gap-6'>
					<div className='w-full flex justify-center items-center gap-20'>
						<div>
							<Link
								href='/'
								className='text-3xl font-bold text-teal-600'
							>
								EasyTech
							</Link>
						</div>

						<div className='w-full'>
							<input
								type='text'
								placeholder='Search your favorite course'
								className='w-full px-4 py-2 rounded-full border border-gray-300 focus:border-teal-600 outline-none transition duration-200'
							/>
						</div>

						<div className='flex gap-4'>
							<button className='px-4 py-2 rounded-md text-white bg-teal-600 hover:bg-teal-700 transition cursor-pointer'>
								<ShoppingCartCheckoutRoundedIcon />
							</button>
							<button className='w-[100px] px-4 py-2 text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white transition cursor-pointer'>
								<Link href='/login'>Login</Link>
							</button>
						</div>
					</div>

					<nav className='w-full flex justify-around items-center py-2'>
						{menuItems.map((item) => (
							<Link
								key={item.name}
								href={item.path}
								className={`relative text-sm text-center font-semibold transition-all duration-300 ease-in-out text-gray-600
				hover:text-teal-600 
				after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300
				${isActive(item.path) ? 'text-teal-600 after:scale-x-100' : ''}`}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
			</header>

			{/* Mobile Navbar */}
			<MobileNav />
		</>
	)
}

export default Navbar

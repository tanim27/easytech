// 'use client'

// import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import MobileNav from './MobileNav'

// const Navbar = () => {
// 	const pathname = usePathname()
// 	const isActive = (path) => pathname === path

// 	return (
// 		<>
// 			{/* Desktop Navbar */}
// 			<header className='hidden lg:flex bg-white shadow-md sticky top-0 z-50'>
// 				<div className='w-full h-24 px-8 py-16 flex flex-col justify-center items-center gap-6'>
// 					<div className='w-full flex justify-center items-center gap-20'>
// 						<div>
// 							<Link
// 								href='/'
// 								className='text-3xl font-bold text-teal-600'
// 							>
// 								EasyTech
// 							</Link>
// 						</div>

// 						<div className='w-full'>
// 							<input
// 								type='text'
// 								placeholder='Search your favorite course'
// 								className='w-full px-4 py-2 rounded-full border border-gray-300 focus:border-teal-500 outline-none transition duration-200'
// 							/>
// 						</div>

// 						<div className='flex gap-4'>
// 							<button className='px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 transition cursor-pointer'>
// 								<ShoppingCartCheckoutRoundedIcon />
// 							</button>
// 							<Link href='/auth/login'>
// 								<button className='w-[100px] px-4 py-2 text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white transition cursor-pointer'>
// 									Login
// 								</button>
// 							</Link>
// 						</div>
// 					</div>

// 					<nav className='w-full flex justify-around items-center py-2'>
// 						{menuItems.map((item) => (
// 							<Link
// 								key={item.name}
// 								href={item.path}
// 								className={`relative text-sm text-center font-semibold transition-all duration-300 ease-in-out text-gray-700
// 				hover:text-teal-600
// 				after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600
// 				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300
// 				${isActive(item.path) ? 'text-teal-600 after:scale-x-100' : ''}`}
// 							>
// 								{item.name}
// 							</Link>
// 						))}
// 					</nav>
// 				</div>
// 			</header>

// 			{/* Mobile Navbar */}
// 			<MobileNav />
// 		</>
// 	)
// }

// export default Navbar

// components/Header.jsx
'use client'

import AppsIcon from '@mui/icons-material/Apps'
import SearchIcon from '@mui/icons-material/Search'
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

const Header = () => {
	const pathname = usePathname()
	const isActive = (path) => pathname === path

	return (
		<>
			<header className='hidden lg:flex flex-col w-full border-b border-gray-200'>
				{/* Top Bar */}
				{/* Top Bar */}
				<div className='h-[80px] border-b border-gray-200'>
					<div className='max-w-7xl mx-auto px-6 flex justify-between items-center h-full'>
						{/* Logo */}
						<div className='flex items-center gap-2'>
							<span className='font-bold text-3xl text-teal-600'>EasyTech</span>
						</div>

						{/* Search Section */}
						<div className='h-[60px] flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2 max-w-xl'>
							<AppsIcon className='text-gray-500 mr-2 border-r border-gray-300' />
							<input
								type='text'
								placeholder='Search here...'
								className='flex-grow bg-transparent focus:outline-none'
							/>
							<button className='flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full ml-2 cursor-pointer hover:bg-teal-700 transition'>
								<SearchIcon />
								<span>Search</span>
							</button>
						</div>

						{/* Icons + CTA */}
						<div className='flex gap-4'>
							<button className='px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 transition cursor-pointer'>
								<ShoppingCartCheckoutRoundedIcon />
							</button>
							<Link href='/auth/login'>
								<button className='w-[100px] px-4 py-2 text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white transition cursor-pointer'>
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Navigation */}
				<div className='border-t border-gray-200'>
					<div className='h-[60px] max-w-7xl mx-auto flex items-center px-6'>
						{/* Categories Icon Section */}
						<div className='h-[60px] flex items-center text-teal-600 border-r border-gray-300 pr-6 mr-6'>
							<AppsIcon
								className='mr-6'
								fontSize='large'
							/>
						</div>

						{/* Navigation Menu */}
						<nav className='h-[60px] flex items-center gap-8 text-sm font-semibold uppercase'>
							{menuItems.map((item) => (
								<Link
									key={item.name}
									href={item.path}
									className={`relative text-sm text-center font-semibold transition-all duration-300 ease-in-out text-gray-700
                  hover:text-teal-600
                  after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600
                  after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300
                  ${
										isActive(item.path) ? 'text-teal-600 after:scale-x-100' : ''
									}`}
								>
									{item.name}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</header>

			{/* Mobile Navbar */}
			<MobileNav />
		</>
	)
}

export default Header

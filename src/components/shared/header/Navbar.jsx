'use client'

import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
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
	{ name: 'FAQs', path: '/frequently-asked-questions' },
	{ name: 'About', path: '/about-us' },
	{ name: 'Contact', path: '/contact-us' },
]

const Header = () => {
	const pathname = usePathname()
	const isActive = (path) => pathname === path

	return (
		<>
			<header className='hidden lg:flex flex-col w-full'>
				{/* Top Bar */}
				<div className='h-[80px] px-4'>
					<div className='max-w-7xl h-full mx-auto flex justify-between items-center'>
						{/* Logo */}
						<div className='flex items-center gap-2'>
							<span className='font-bold text-3xl text-teal-600'>EasyTech</span>
						</div>

						{/* Search Section */}
						<div className='bg-gray-100 h-[50px] flex items-center rounded-full px-4 py-2 w-1/2 max-w-xl'>
							<input
								type='text'
								placeholder='Search here...'
								className='flex-grow bg-transparent focus:outline-none p-4'
							/>
							<button className='bg-teal-600 text-white h-[30px] w-[120px] flex justify-center items-center gap-2 p-2 rounded-full ml-2 cursor-pointer hover:bg-teal-700 transition'>
								<SearchIcon fontSize='small' />
								<span className='text-sm'>Search</span>
							</button>
						</div>

						{/* Icons + CTA */}
						<div className='flex gap-4'>
							<button className='px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded-sm transition cursor-pointer'>
								<ShoppingCartCheckoutRoundedIcon />
							</button>
							<Link href='/auth/login'>
								<button className='w-[100px] px-4 py-2 text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white rounded-sm transition cursor-pointer'>
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Navigation */}
				<div className='border-t border-b border-gray-200'>
					<div className='h-[60px] max-w-7xl mx-auto flex items-center px-6'>
						{/* Categories Icon Section */}
						<div className='h-[60px] flex items-center text-teal-600 border-r border-gray-300 pr-6 mr-6'>
							<AppsRoundedIcon
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

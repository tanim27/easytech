// components/Footer.jsx
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import Link from 'next/link'

const footerLinks = [
	{ name: 'Privacy Policy', path: '/privacy-policy' },
	{ name: 'Terms of Service', path: '/terms' },
	{ name: 'Support', path: '/contact-us' },
]

const Footer = () => {
	return (
		<footer className='bg-[#f9f9f9] text-[#111] border-t border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
				{/* Logo + Description */}
				<div>
					<Link
						href='/'
						className='text-2xl font-bold text-[#129990]'
					>
						EasyTech
					</Link>
					<p className='mt-4 text-sm text-gray-600'>
						Empowering the next generation of digital professionals through
						practical learning and real success stories.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className='text-lg font-semibold mb-3 text-[#129990]'>
						Quick Links
					</h3>
					<ul className='space-y-2 text-sm'>
						{footerLinks.map((link) => (
							<li key={link.name}>
								<Link
									href={link.path}
									className='hover:text-[#129990] transition'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Menu */}
				<div>
					<h3 className='text-lg font-semibold mb-3 text-[#129990]'>Menu</h3>
					<ul className='space-y-2 text-sm'>
						{[
							{ name: 'Courses', path: '/courses' },
							{ name: 'Events', path: '/events' },
							{ name: 'Reviews', path: '/student-reviews' },
							{ name: 'Success Story', path: '/success-story' },
						].map((item) => (
							<li key={item.name}>
								<Link
									href={item.path}
									className='hover:text-[#129990] transition'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact & Social */}
				<div>
					<h3 className='text-lg font-semibold mb-3 text-[#129990]'>
						Contact Us
					</h3>
					<p className='text-sm text-gray-600 mb-2'>
						123 Digital Street, Dhaka, Bangladesh
					</p>
					<p className='text-sm text-gray-600 mb-2'>
						Email: support@easytech.com
					</p>
					<p className='text-sm text-gray-600 mb-4'>Phone: +880 1234-567890</p>

					<div className='flex gap-4'>
						<Facebook className='text-[#129990] hover:text-[#0e7d7a] cursor-pointer' />
						<Twitter className='text-[#129990] hover:text-[#0e7d7a] cursor-pointer' />
						<Instagram className='text-[#129990] hover:text-[#0e7d7a] cursor-pointer' />
						<YouTube className='text-[#129990] hover:text-[#0e7d7a] cursor-pointer' />
					</div>
				</div>
			</div>

			<div className='text-center py-4 text-sm text-gray-500 border-t border-gray-200'>
				&copy; {new Date().getFullYear()} EasyTech. All rights reserved.
			</div>
		</footer>
	)
}

export default Footer

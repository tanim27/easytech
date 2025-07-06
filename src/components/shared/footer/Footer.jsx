// components/Footer.jsx
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import Link from 'next/link'

const footerLinks = [
	{ name: 'About', path: '/about-us' },
	{ name: 'Contact', path: '/contact-us' },
	{ name: 'Privacy Policy', path: '/privacy-policy' },
	{ name: 'Terms of Service', path: '/terms' },
	{ name: 'Support', path: '/contact-us' },
]

const Footer = () => {
	return (
		<footer className='bg-white text-gray-600 border-t border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
				{/* Logo + Description */}
				<div>
					<Link
						href='/'
						className='text-2xl font-bold text-teal-600'
					>
						EasyTech
					</Link>
					<p className='mt-4 text-sm text-justify'>
						Empowering the next generation of digital professionals through
						practical learning and real success stories.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className='text-lg font-bold mb-3 text-teal-600'>Quick Links</h3>
					<ul className='space-y-2 text-sm'>
						{footerLinks.map((link) => (
							<li key={link.name}>
								<Link
									href={link.path}
									className='hover:text-teal-600 transition'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Menu */}
				<div>
					<h3 className='text-lg font-bold mb-3 text-teal-600'>Menu</h3>
					<ul className='space-y-2 text-sm'>
						{[
							{ name: 'Courses', path: '/courses' },
							{ name: 'Our Agency', path: '/agency' },
							{ name: 'Freelancers Story', path: '/freelancers-story' },
							{ name: 'Success Story', path: '/success-story' },
							{ name: 'Student Reviews', path: '/student-reviews' },
							{ name: 'Events', path: '/events' },
						].map((item) => (
							<li key={item.name}>
								<Link
									href={item.path}
									className='hover:text-teal-600 transition'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact & Social */}
				<div>
					<h3 className='text-lg font-bold mb-3 text-teal-600'>Contact Us</h3>
					<p className='text-sm mb-2'>123 Digital Street, Dhaka, Bangladesh</p>
					<p className='text-sm mb-2'>Email: support@easytech.com</p>
					<p className='text-sm mb-4'>Phone: +880 1234-567890</p>

					<div className='flex gap-4'>
						<Facebook className='text-teal-600 hover:text-teal-700 cursor-pointer' />
						<Twitter className='text-teal-600 hover:text-teal-700 cursor-pointer' />
						<Instagram className='text-teal-600 hover:text-teal-700 cursor-pointer' />
						<YouTube className='text-teal-600 hover:text-teal-700 cursor-pointer' />
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

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
		<div className='relative'>
			{/* Shadow on top */}
			<div className='absolute -top-1 left-0 w-full h-2 rotate-180 shadow-md'></div>
			<footer className='text-gray-600'>
				<div className='w-full mx-auto px-8 py-12'>
					{/* Top Section: Logo + Links */}
					<div className='flex flex-col lg:flex-row justify-between gap-12'>
						{/* Logo + Description */}
						<div className='flex-1 min-w-[250px]'>
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

						{/* Links and Contact */}
						<div className='flex flex-col sm:flex-row flex-1 justify-between gap-8'>
							{/* Quick Links */}
							<div>
								<h3 className='text-lg font-bold mb-3 text-teal-600'>
									Quick Links
								</h3>
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
								<h3 className='text-lg font-bold mb-3 text-teal-600'>
									Contact Us
								</h3>
								<p className='text-sm mb-2'>
									123 Digital Street, Dhaka, Bangladesh
								</p>
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
					</div>

					{/* Divider */}
					<div className='my-8 border-t border-gray-200'></div>

					{/* Copyright */}
					<div className='text-center text-sm text-gray-500'>
						&copy; {new Date().getFullYear()} EasyTech. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer

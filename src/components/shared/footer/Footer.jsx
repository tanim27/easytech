// components/Footer.jsx

import { Facebook, Instagram, Pinterest, YouTube } from '@mui/icons-material'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'
import CallRoundedIcon from '@mui/icons-material/CallRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'

const Footer = () => {
	return (
		<footer className='bg-teal-950 text-white pt-16 px-4 lg:px-20'>
			{/* Top Section */}
			<div className='max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap lg:justify-between gap-12'>
				{/* Column 1 - Branding */}
				<div className='flex-1 min-w-[240px] pr-6 lg:border-r lg:border-white/20'>
					<h3 className='text-3xl md:text-4xl font-bold mb-3'>EASYTECH</h3>
					<div className='h-[2px] w-12 bg-white mb-4' />
					<p className='text-sm text-gray-300 mb-4'>
						Fusce varius, dolor tempor interdum tristique bibendum.
					</p>
				</div>

				{/* Column 2 - Company Info */}
				<div className='flex-1 min-w-[240px] lg:pl-6'>
					<h3 className='text-lg font-bold mb-3'>COMPANY INFO</h3>
					<div className='h-[2px] w-12 bg-white mb-4' />
					<ul className='space-y-2 text-sm'>
						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal-400'
								/>

								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									About Us
								</span>
							</span>
						</li>

						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									About Us
								</span>
							</span>
						</li>
						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									About Us
								</span>
							</span>
						</li>
						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									About Us
								</span>
							</span>
						</li>
						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									About Us
								</span>
							</span>
						</li>
					</ul>
				</div>

				{/* Column 3 - Useful Links */}
				<div className='flex-1 min-w-[240px] lg:pl-6'>
					<h3 className='text-lg font-bold mb-3'>USEFUL LINKS</h3>
					<div className='h-[2px] w-12 bg-white mb-4' />
					<ul className='space-y-2 text-sm'>
						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									Reviews
								</span>
							</span>
						</li>

						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									FAQs
								</span>
							</span>
						</li>

						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal-400'
								/>

								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									About Us
								</span>
							</span>
						</li>

						<li className='flex items-center gap-2'>
							{/* Hover group wraps both */}
							<span className='group flex items-center gap-2 cursor-pointer'>
								{/* Icon slides right when text is hovered */}
								<ArrowRightAltRoundedIcon
									fontSize='medium'
									className='group-hover:translate-x-1 group-hover:text-teal-400 transition duration-300 '
								/>
								{/* Text changes color smoothly */}
								<span className='group-hover:text-teal-400 transition duration-300'>
									Contact
								</span>
							</span>
						</li>
					</ul>
				</div>

				{/* Column 4 - Contact */}
				<div className='flex-1 min-w-[240px]'>
					<h3 className='text-lg font-semibold mb-3'>GET IN TOUCH!</h3>
					<div className='h-[2px] w-12 bg-white mb-4' />
					<p className='text-sm mb-4'>
						Fusce varius, dolor tempor interdum tristique bibendum.
					</p>
					<p className='flex items-center gap-2 mb-2'>
						<CallRoundedIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>(702) 123-1478</span>
					</p>
					<p className='flex items-center gap-2 mb-4'>
						<EmailRoundedIcon
							fontSize='small'
							className='text-teal-600'
						/>
						<span>info@easytech.com</span>
					</p>
					<div className='flex gap-4'>
						<Facebook
							className='hover:text-teal-600 cursor-pointer'
							fontSize='medium'
						/>
						<Instagram
							className='hover:text-teal-600 cursor-pointer'
							fontSize='medium'
						/>
						<Pinterest
							className='hover:text-teal-600 cursor-pointer'
							fontSize='medium'
						/>
						<YouTube
							className='hover:text-teal-600 cursor-pointer'
							fontSize='medium'
						/>
					</div>
				</div>
			</div>

			{/* Bottom copyright */}
			<div className='border-t border-white/10 mt-12 py-6 text-center text-sm text-gray-400'>
				Copyright © 2025 EasyTech. All Rights Reserved.
			</div>
		</footer>
	)
}

export default Footer

'use client'

import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
	const [coupon, setCoupon] = useState('')

	const handleApplyCoupon = () => {
		console.log('Applied coupon:', coupon)
	}

	const cartItems = [
		{
			id: 1,
			name: 'AI Content Creation with Active and Passive Income Generation',
			batch: 'Batch 94 - AI Content Creation',
			price: 2000,
			image: '/assets/illustrations/image-4.jpg',
		},
		{
			id: 2,
			name: 'AI Content Creation with Active and Passive Income Generation',
			batch: 'Batch 94 - AI Content Creation',
			price: 2000,
			image: '/assets/illustrations/image-4.jpg',
		},
	]

	return (
		<div className='flex items-center justify-center px-4 sm:px-8 md:px-12 py-16 md:py-32'>
			<div className='bg-white w-full max-w-4xl shadow-xl rounded-md p-4 sm:p-6 md:p-8'>
				<h2 className='font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center mb-8'>
					Your Cart
				</h2>

				{/* Cart Table Header */}
				<div className='hidden sm:grid grid-cols-4 font-semibold text-white bg-teal-600 rounded-md px-4 py-3 mb-4'>
					<p className='col-span-1'>Image</p>
					<p className='col-span-2'>Item</p>
					<p className='text-right'>Price</p>
				</div>

				{/* Cart Items */}
				<div className='flex flex-col gap-4'>
					{cartItems.map((item) => (
						<div
							key={item.id}
							className='grid grid-cols-1 sm:grid-cols-4 items-start sm:items-center gap-4 p-4 rounded-md shadow-sm mb-4'
						>
							<div className='col-span-1'>
								<Image
									src={item.image}
									alt={item.name}
									width={100}
									height={70}
									className='rounded-md object-cover w-full max-w-[120px]'
								/>
							</div>
							<div className='col-span-2'>
								<p className='font-semibold text-gray-800 text-sm sm:text-base'>
									{item.name}
								</p>
								<p className='text-sm text-gray-500 mt-1'>
									<b>Batch:</b> {item.batch}
								</p>
							</div>
							<div className='flex sm:justify-end items-center gap-2 sm:gap-4 mt-2 sm:mt-0'>
								<span className='text-gray-800 font-bold text-sm sm:text-base'>
									৳{item.price}
								</span>
								<button className='text-gray-400 hover:text-red-500'>
									<CloseIcon />
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Bottom Section */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
					{/* Coupon Code */}
					<div className='p-6 rounded-md shadow-md'>
						<h2 className='text-lg sm:text-xl font-bold mb-4 text-gray-800'>
							Discount Coupon Code
						</h2>
						<div className='flex flex-col sm:flex-row items-stretch gap-4'>
							<input
								type='text'
								placeholder='Enter coupon'
								value={coupon}
								onChange={(e) => setCoupon(e.target.value)}
								className='w-full px-4 py-2 border border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200 rounded-md'
							/>
							<button
								onClick={handleApplyCoupon}
								className='bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition'
							>
								Apply
							</button>
						</div>
					</div>

					{/* Cart Summary */}
					<div className='p-6 rounded-md shadow-md'>
						<h2 className='text-lg sm:text-xl font-bold mb-4 text-gray-800'>
							Cart Summary
						</h2>
						<div className='flex justify-between text-gray-700 border-b border-gray-300 py-2 mb-2 text-sm sm:text-base'>
							<p>Subtotal</p>
							<p>৳{cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
						</div>
						<div className='flex justify-between font-bold text-lg text-gray-800'>
							<p>Total</p>
							<p>৳{cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
						</div>
						<Link href='/checkout'>
							<button className='mt-6 w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition'>
								Go To Checkout
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

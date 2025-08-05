'use client'

import Image from 'next/image'
import { useState } from 'react'

const Checkout = () => {
	const [paymentMethod, setPaymentMethod] = useState('')
	const [agreed, setAgreed] = useState(false)

	const handlePlaceOrder = () => {
		if (!agreed) {
			alert('Please agree to the terms and conditions.')
			return
		}

		console.log('Order Placed:', { paymentMethod })
		// Add your order logic here
	}

	const cartItems = [
		{
			id: 1,
			image: '/assets/illustrations/image-3.jpg',
			title: 'AI Content Creation with Facebook and YouTube Monetization',
			batch: 'Batch 95 - AI Content Creation',
			price: 2000,
		},
		{
			id: 2,
			image: '/assets/illustrations/image-3.jpg',
			title: 'AI Content Creation with Facebook and YouTube Monetization',
			batch: 'Batch 95 - AI Content Creation',
			price: 2000,
		},
		// Add more items if needed
	]

	return (
		<div className='min-h-screen px-4 sm:px-8 md:px-12 py-16 md:py-32'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10'>
				{/* Left Side */}
				<div className='lg:col-span-2 space-y-8'>
					{/* Cart Item */}
					<div className='  overflow-hidden'>
						<div className='bg-teal-600 text-white grid grid-cols-12 font-semibold py-3 px-4'>
							<p className='col-span-2'>Image</p>
							<p className='col-span-8'>Item</p>
							<p className='col-span-2 text-right'>Amount</p>
						</div>

						{cartItems.map((item) => (
							<div
								key={item.id}
								className='grid grid-cols-12 items-center gap-4 px-4 py-4'
							>
								<div className='col-span-2'>
									<Image
										src={item.image}
										alt='Product'
										width={80}
										height={80}
										className='rounded-md object-cover'
									/>
								</div>
								<div className='col-span-8 text-gray-800'>
									<p className='font-semibold'>{item.title}</p>
									<p className='text-sm'>
										<span className='font-bold'>Batch:</span> {item.batch}
									</p>
								</div>
								<div className='col-span-2 text-right font-semibold text-gray-700'>
									${item.price}
								</div>
							</div>
						))}
					</div>

					{/* Your Details */}
					<div className='  shadow-sm p-6 bg-white'>
						<h3 className='text-lg font-semibold text-center mb-4 text-gray-800'>
							Your Details
						</h3>
						<table className='w-full text-sm'>
							<tbody>
								<tr className='border-b border-white'>
									<td className='bg-gray-100 font-medium px-3 py-2 w-1/3'>
										Name
									</td>
									<td className='px-3 py-2'>Abdullah Al Mahmud</td>
								</tr>
								<tr className='border-b border-white'>
									<td className='bg-gray-100 font-medium px-3 py-2'>Email</td>
									<td className='px-3 py-2'>abdullahtanim27@gmail.com</td>
								</tr>
								<tr className=''>
									<td className='bg-gray-100 font-medium px-3 py-2'>Phone</td>
									<td className='px-3 py-2'>01633673172</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Right Side */}
				<div className='space-y-8'>
					{/* Cart Summary */}
					<div className='  shadow-sm p-6 bg-white'>
						<h3 className='text-lg font-semibold mb-4 text-gray-800'>
							Cart Summary
						</h3>
						<div className='flex justify-between text-gray-700 mb-2'>
							<p>Sub Total</p>
							<p>৳2000</p>
						</div>
						<div className='flex justify-between text-gray-700 mb-4'>
							<p>Txn Fee (2%)</p>
							<p>৳40</p>
						</div>

						<div className='flex justify-between text-gray-900 font-bold text-xl mt-4 border-t border-gray-300 pt-4'>
							<p>Total</p>
							<p>৳2040</p>
						</div>
					</div>

					{/* Payment Method */}
					<div className='  shadow-sm p-6 bg-white space-y-3'>
						<h3 className='text-lg font-semibold mb-4 text-gray-800'>
							Payment Method
						</h3>
						{['Bkash Payment', 'Bkash/Card/Bank Payment', 'Nagad Payment'].map(
							(method) => (
								<label
									key={method}
									className='flex items-center gap-2 text-gray-700 cursor-pointer'
								>
									<input
										type='radio'
										name='paymentMethod'
										value={method}
										checked={paymentMethod === method}
										onChange={(e) => setPaymentMethod(e.target.value)}
										className='accent-teal-600'
									/>
									{method}
								</label>
							),
						)}
					</div>

					{/* Terms */}
					<div className='  shadow-sm p-4 bg-white'>
						<label className='flex items-start gap-2 text-sm text-gray-700 cursor-pointer'>
							<input
								type='checkbox'
								checked={agreed}
								onChange={(e) => setAgreed(e.target.checked)}
								className='mt-1 accent-teal-600'
							/>
							<span>
								I have read and agreed to the{' '}
								<span className='text-red-500 font-medium'>
									Terms & Conditions, Privacy Policy, and Refund Policy
								</span>{' '}
								of SR Dream IT.
							</span>
						</label>
					</div>

					{/* Place Order */}
					<button
						onClick={handlePlaceOrder}
						className='w-full bg-teal-600 text-white font-medium py-3 rounded-md hover:bg-teal-700 transition'
					>
						Place order →
					</button>
				</div>
			</div>
		</div>
	)
}

export default Checkout

'use client'

import { ExpandMore } from '@mui/icons-material'
import { useState } from 'react'

const faqs = [
	{
		question: 'What is EasyTech?',
		answer:
			'EasyTech is your one-stop shop for cutting-edge gadgets, electronics, and expert tech services — all in one place.',
	},
	{
		question: 'How do I place an order?',
		answer:
			'Simply browse products, add them to your cart, and complete the checkout using your preferred payment method. You’ll receive an order confirmation shortly after.',
	},
	{
		question: 'Do you offer warranties?',
		answer:
			'Yes, we offer manufacturer warranties on most of our products. Warranty duration and coverage may vary by item.',
	},
	{
		question: 'Can I return or exchange a product?',
		answer:
			'Yes. Items can be returned or exchanged within 7 days of delivery, as long as they’re unused and in original condition.',
	},
	{
		question: 'How can I contact support?',
		answer:
			'Our support team is available via live chat, email, or phone. You can also reach us through the contact page on our website.',
	},
]

export default function FAQPage() {
	const [openIndex, setOpenIndex] = useState(null)

	const toggle = (index) => {
		setOpenIndex(index === openIndex ? null : index)
	}

	return (
		<>
			<section className='bg-[#f2f2f2] w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[280px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 gap-4'>
				<h1 className='font-extrabold text-4xl lg:text-5xl text-center text-gray-800'>
					Frequently Asked Questions
				</h1>

				<p className='text-center text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
					We’ve answered the most common questions to help you get started.
					Still unsure? Reach out to our team.
				</p>
			</section>

			<section className='px-4 sm:px-8 md:px-12 py-16'>
				<div className='max-w-5xl mx-auto'>
					<div className='space-y-4'>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className='bg-white overflow-hidden transition-all duration-300 shadow-sm'
							>
								<button
									className='flex items-center justify-between w-full border-b border-gray-200 px-6 py-5 text-left focus:outline-none group cursor-pointer'
									onClick={() => toggle(index)}
								>
									<span className='text-lg font-medium text-gray-900 group-hover:text-teal-600 transition'>
										{faq.question}
									</span>
									<ExpandMore
										className={`text-gray-500 transform transition-transform duration-300 ${
											openIndex === index ? 'rotate-180 text-teal-600' : ''
										}`}
									/>
								</button>

								<div
									className={`px-6 text-gray-600 text-base leading-relaxed transition-all duration-300 ease-in-out ${
										openIndex === index
											? 'max-h-96 py-4'
											: 'max-h-0 overflow-hidden'
									}`}
								>
									{faq.answer}
								</div>
							</div>
						))}
					</div>

					<div className='text-center mt-16'>
						<p className='text-gray-700'>Still have questions?</p>
						<a
							href='/contact'
							className='inline-block mt-2 text-teal-600 font-medium hover:underline transition'
						>
							Contact our support team →
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

'use client'

import { AccessTime, LocationOn, Phone } from '@mui/icons-material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const ContactUs = () => {
	const initialValues = {
		name: '',
		email: '',
		message: '',
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		message: Yup.string().required('Message is required'),
	})

	const handleSubmit = (values, { resetForm }) => {
		console.log('Form submitted:', values)
		resetForm()
	}

	return (
		<>
			<div className='bg-[#f2f2f2] w-full h-[200px] md:h-[250px] flex justify-center items-center'>
				<h1 className='font-extrabold text-4xl md:text-5xl text-center text-gray-800 mb-12'>
					Contact Us
				</h1>
			</div>

			<div className='py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
						{/* Left: Contact Info */}
						<div className='p-4 max-w-xl'>
							<h2 className='text-3xl font-bold text-gray-900 mb-2'>
								Office Information
							</h2>
							<p className='text-gray-500 text-sm mb-8'>
								Completely recapitalize 24/7 communities via standards compliant
								metrics whereas.
							</p>

							{/* Phone & Email */}
							<div className='flex items-start gap-4 mb-6 pb-6 border-b border-gray-300'>
								<div className='bg-white px-6 py-6 shadow-lg'>
									<Phone className='text-teal-600' />
								</div>
								<div>
									<h4 className='font-semibold text-xl text-gray-800 mb-1'>
										Phone Number & Email
									</h4>
									<p className='text-gray-600 text-sm'>(+65) - 48596 - 5789</p>
									<p className='text-gray-600 text-sm'>hello@easytech.com</p>
								</div>
							</div>

							{/* Address */}
							<div className='flex items-start gap-4 mb-6 pb-6 border-b border-gray-300'>
								<div className='bg-white px-6 py-6 shadow-lg'>
									<LocationOn className='text-teal-600' />
								</div>
								<div>
									<h4 className='font-semibold text-xl text-gray-800 mb-1'>
										Our Office Address
									</h4>
									<p className='text-gray-600 text-sm'>
										2690 Mirpur Street Victoria Road, <br /> Dhaka, Bangladesh
									</p>
								</div>
							</div>

							{/* Office Hours */}
							<div className='flex items-start gap-4'>
								<div className='bg-white px-6 py-6 shadow-lg'>
									<AccessTime className='text-teal-600' />
								</div>
								<div>
									<h4 className='font-semibold text-xl text-gray-800 mb-1'>
										Official Work Time
									</h4>
									<p className='text-gray-600 text-sm'>
										Monday – Friday: 09:00 – 20:00
									</p>
									<p className='text-gray-600 text-sm'>
										Sunday & Saturday: 10:30 – 22:00
									</p>
								</div>
							</div>
						</div>

						{/* Right: Contact Form */}
						<div className='bg-white shadow-xl p-8'>
							<h2 className='text-2xl font-semibold text-gray-800 mb-6'>
								Send Us a Message
							</h2>

							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								<Form className='space-y-5'>
									<div>
										<Field
											type='text'
											name='name'
											placeholder='Your Name'
											className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
										/>
										<ErrorMessage
											name='name'
											component='p'
											className='text-red-500 text-sm mt-1'
										/>
									</div>

									<div>
										<Field
											type='email'
											name='email'
											placeholder='Your Email'
											className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
										/>
										<ErrorMessage
											name='email'
											component='p'
											className='text-red-500 text-sm mt-1'
										/>
									</div>

									<div>
										<Field
											as='textarea'
											name='message'
											placeholder='Your Message'
											rows='5'
											className='w-full px-4 py-3 border-1 border-gray-300 focus:border-teal-500 focus:outline-none transition duration-200'
										/>
										<ErrorMessage
											name='message'
											component='p'
											className='text-red-500 text-sm mt-1'
										/>
									</div>

									<button
										type='submit'
										className='bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition duration-200'
									>
										Send Message
									</button>
								</Form>
							</Formik>
						</div>
					</div>
				</div>
			</div>

			<div className='w-full h-[350px] md:h-[450px]'>
				<iframe
					title='EasyTech Location'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8995543838323!2d90.39101361536458!3d23.750876594491106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894f82d739f%3A0x90b6e12dfc610a42!2sDhaka!5e0!3m2!1sen!2sbd!4v1717011227312!5m2!1sen!2sbd'
					width='100%'
					height='100%'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='rounded-none border-0 w-full h-full'
				></iframe>
			</div>
		</>
	)
}

export default ContactUs

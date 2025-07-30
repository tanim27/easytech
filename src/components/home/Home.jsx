import { Bolt, Security, SupportAgent, ThumbUp } from '@mui/icons-material'
import AboutUs from '../about-us/AboutUs'
import StudentFeedbackCarousel from '../custom-ui-elements/StudentFeedbackCarousel'

const features = [
	{
		feature_title: 'Expert Support',
		feature_description:
			'Get 24/7 access to our experienced support team for any technical assistance or questions.',
		icon: <SupportAgent fontSize='inherit' />,
	},
	{
		feature_title: 'Fast & Reliable',
		feature_description:
			'Experience lightning-fast performance and 99.9% uptime guaranteed for all your needs.',
		icon: <Bolt fontSize='inherit' />,
	},
	{
		feature_title: 'Secure by Design',
		feature_description:
			'Your data is protected with top-tier security protocols and regular vulnerability checks.',
		icon: <Security fontSize='inherit' />,
	},
	{
		feature_title: 'Customer Satisfaction',
		feature_description:
			'We prioritize your success with user-friendly solutions and outstanding service quality.',
		icon: <ThumbUp fontSize='inherit' />,
	},
]

const Home = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000))

	return (
		<main className=''>
			{/* Hero Section */}
			<section className='min-h-screen bg-teal-50 px-8 py-12'>
				<div className='mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12'>
					<div className='text-center lg:text-left'>
						<h2 className='text-4xl lg:text-5xl font-extrabold text-teal-700 mb-4'>
							Empowering Your Tech Journey
						</h2>
						<p className='text-gray-700 text-lg mb-6 max-w-xl mx-auto lg:mx-0'>
							Learn Digital Marketing, Web Development, and AI Content Creation
							with EasyTech’s career-focused programs designed by industry
							professionals.
						</p>
						<button className='bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md cursor-pointer'>
							Get Started
						</button>
					</div>

					<div className='w-full lg:w-1/2 '>
						<img
							src='/assets/hero-image.jpg'
							alt='hero-image'
							className='rounded-2xl shadow-lg w-full object-cover'
						/>
					</div>
				</div>
			</section>

			{/* About Us */}
			<AboutUs />

			{/* Why Choose Us */}
			<section className='flex flex-col justify-center items-center'>
				<div className='max-w-7xl mx-auto flex flex-col justify-center items-center gap-8'>
					<h2 className='text-3xl md:text-4xl font-extrabold'>Why Choose Us</h2>
					<div className='flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center px-4 py-12'>
						{features.map((feature, idx) => (
							<div
								key={idx}
								className='bg-white w-72 h-80 rounded-2xl p-6 flex flex-col items-center justify-between text-center text-black shadow-lg hover:shadow-xl transition duration-300 ease-in-out'
							>
								<div className='text-teal-600 text-6xl'>{feature.icon}</div>
								<h3 className='text-2xl font-bold'>{feature.feature_title}</h3>
								<p className='text-base font-medium text-gray-600'>
									{feature.feature_description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Join Our Community */}
			<section className='mt-10 flex flex-col justify-center items-center'>
				<div className='max-w-6xl mx-auto flex flex-col justify-center items-center gap-8'>
					<h2 className='text-3xl md:text-4xl font-extrabold'>
						Join Our Community
					</h2>

					<p className='text-lg text-gray-600 text-center'>
						Be part of a thriving network of learners, educators, and
						professionals. Exchange ideas, ask questions, and grow together.
					</p>

					<div className='flex flex-col md:flex-row items-center justify-center gap-4 px-4'>
						<div className='flex flex-col items-center max-w-xs p-6 bg-white shadow-md rounded-xl'>
							<div className='text-4xl mb-2'>💬</div>
							<h3 className='font-semibold text-lg mb-2'>
								Engaging Discussions
							</h3>
							<p className='text-gray-500 text-sm'>
								Ask questions, get feedback, and participate in meaningful
								conversations with like-minded learners.
							</p>
						</div>
						<div className='flex flex-col items-center max-w-xs p-6 bg-white shadow-md rounded-xl'>
							<div className='text-4xl mb-2'>🤝</div>
							<h3 className='font-semibold text-lg mb-2'>
								Collaborative Study
							</h3>
							<p className='text-gray-500 text-sm'>
								Join or create study groups to stay motivated, track progress,
								and help each other succeed.
							</p>
						</div>
						<div className='flex flex-col items-center max-w-xs p-6 bg-white shadow-md rounded-xl'>
							<div className='text-4xl mb-2'>🎉</div>
							<h3 className='font-semibold text-lg mb-2'>Exclusive Events</h3>
							<p className='text-gray-500 text-sm'>
								Attend webinars, workshops, and live sessions hosted by experts
								and community members.
							</p>
						</div>
					</div>

					<button className='bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 text-lg font-semibold transition duration-300'>
						Join Now — It’s Free!
					</button>

					<p className='text-sm text-gray-500'>
						Over <span className='font-semibold text-teal-600'>500</span>{' '}
						members and growing!
					</p>
				</div>
			</section>

			{/* Learners Feedback */}
			<section className='py-16 px-4 text-center'>
				<h2 className='text-3xl font-semibold mb-12'>Learners Feedback</h2>
				<StudentFeedbackCarousel />
				{/* <AutoScrollCards /> */}
			</section>

			{/* Promo Section */}
			<section className='py-16 px-4 text-center bg-teal-600 text-white'>
				<h2 className='text-3xl font-bold mb-4'>🔥 Enroll Today & Save 30%</h2>
				<p className='max-w-xl mx-auto mb-6'>
					For a limited time, enjoy exclusive discounts on all EasyTech courses.
					Start your learning journey now!
				</p>
				<button className='bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100'>
					Get Promo
				</button>
			</section>

			{/* Footer CTA */}
			<section className=' py-12 px-4 text-center'>
				<h3 className='text-2xl font-bold mb-2'>
					Start Learning with EasyTech
				</h3>
				<p className='mb-4 text-gray-700'>
					Gain skills, build your career, and join a global community of tech
					learners.
				</p>
				<button className='bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700'>
					Explore Courses
				</button>
			</section>
		</main>
	)
}

export default Home

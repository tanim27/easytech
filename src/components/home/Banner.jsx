const Banner = () => {
	return (
		<section className='px-4 sm:px-8 md:px-12 py-16 md:py-32'>
			<div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-16 md:gap-24'>
				{/* Text Content */}
				<div className='w-full lg:w-1/2 flex flex-col justify-start items-start gap-6'>
					<h2 className='text-4xl lg:text-5xl font-extrabold text-teal-700'>
						Empowering Your Tech Journey
					</h2>
					<p className='w-full md:w-[80%] text-gray-700 text-lg text-justify'>
						Learn Digital Marketing, Web Development, and AI Content Creation
						with EasyTech’s career-focused programs designed by industry
						professionals.
					</p>
					<button className='w-full md:w-[200px] bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-sm transition duration-300 shadow-md cursor-pointer'>
						Get Started
					</button>
				</div>

				{/* Image Content */}
				<div className='w-full lg:w-1/2'>
					<img
						src='/assets/illustrations/home-banner-2.jpg'
						alt='home-banner'
						className='w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}

export default Banner

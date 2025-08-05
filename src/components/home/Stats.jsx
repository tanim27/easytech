const Stats = () => {
	return (
		<section className='bg-teal-600 py-0 md:py-20'>
			<div className='max-w-7xl mx-auto relative'>
				{/* Dividers for large screens */}
				<div className='hidden md:block absolute inset-y-0 left-1/4 w-px bg-white/30' />
				<div className='hidden md:block absolute inset-y-0 left-1/2 w-px bg-white/30' />
				<div className='hidden md:block absolute inset-y-0 left-3/4 w-px bg-white/30' />

				{/* Responsive Layout */}
				<div className='hidden md:grid grid-cols-4 text-center text-white'>
					{/* Stat 1 */}
					<div className='px-4 py-6'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
							97
						</h2>
						<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
							Finished Sessions
						</p>
					</div>

					{/* Stat 2 */}
					<div className='px-4 py-6'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
							15,485
						</h2>
						<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
							Enrolled Learners
						</p>
					</div>

					{/* Stat 3 */}
					<div className='px-4 py-6'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
							250
						</h2>
						<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
							Online Instructors
						</p>
					</div>

					{/* Stat 4 */}
					<div className='px-4 py-6'>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
							97.55%
						</h2>
						<p className='mt-2 text-xs sm:text-sm md:text-base font-bold uppercase'>
							Satisfaction Rate
						</p>
					</div>
				</div>

				{/* Small screen layout */}
				<div className='relative md:hidden flex flex-col gap-6 text-white'>
					{/* Divider lines */}
					<div className='absolute left-1/2 top-0 bottom-0 w-px bg-white/30 z-10' />
					<div className='absolute top-1/2 left-0 right-0 h-px bg-white/30 z-10' />

					{/* Row 1 */}
					<div className='flex sm:flex-row gap-6'>
						<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
							<h2 className='text-2xl sm:text-3xl font-extrabold'>97</h2>
							<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
								Finished Sessions
							</p>
						</div>
						<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
							<h2 className='text-2xl sm:text-3xl font-extrabold'>15,485</h2>
							<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
								Enrolled Learners
							</p>
						</div>
					</div>

					{/* Row 2 */}
					<div className='flex sm:flex-row gap-6'>
						<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
							<h2 className='text-2xl sm:text-3xl font-extrabold'>250</h2>
							<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
								Online Instructors
							</p>
						</div>
						<div className='w-full sm:w-1/2 aspect-square flex flex-col justify-center items-center text-center z-20'>
							<h2 className='text-2xl sm:text-3xl font-extrabold'>97.55%</h2>
							<p className='mt-2 text-xs sm:text-sm font-bold uppercase'>
								Satisfaction Rate
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stats

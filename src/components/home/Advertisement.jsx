import {
	AllInclusive,
	AutoAwesome,
	LaptopChromebook,
	School,
} from '@mui/icons-material'

const Advertisement = () => {
	return (
		<section className='px-4 sm:px-8 md:px-12 py-16 md:py-32'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
				{/* Image Section */}
				<div className='relative grid grid-cols-2 gap-4 sm:gap-6'>
					<div className='flex flex-col gap-4 sm:gap-6'>
						<img
							src='/assets/illustrations/image-1.jpg'
							alt='Team collaboration'
							className='w-full h-40 sm:h-48 object-cover rounded-xl shadow-lg'
						/>
						<img
							src='/assets/illustrations/image-2.jpg'
							alt='Remote work'
							className='w-3/4 h-32 sm:h-40 object-cover rounded-xl shadow-lg ml-auto'
						/>
					</div>
					<div className='flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8'>
						<img
							src='/assets/illustrations/image-3.jpg'
							alt='Creative session'
							className='w-3/4 h-32 sm:h-40 object-cover rounded-xl shadow-lg'
						/>
						<img
							src='/assets/illustrations/image-5.jpg'
							alt='Brainstorming'
							className='w-full h-40 sm:h-48 object-cover rounded-xl shadow-lg'
						/>
					</div>
				</div>

				{/* Text Section */}
				<div className='max-w-2xl mx-auto lg:mx-0'>
					<div className='text-start mb-6'>
						<p className='font-semibold text-teal-600 uppercase'>
							Distance Learning
						</p>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-justify mt-2'>
							89% of people learning for professional development report career
							benefits like getting a promotion, starting a new career
						</h2>
						<p className='font-medium text-gray-600 text-justify mt-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p className='font-bold text-gray-600 text-justify mt-2'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						<div className='flex items-center gap-2'>
							<School className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Expert Trainers
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<LaptopChromebook className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Remote Learning
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<AllInclusive className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Lifetime Access
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<AutoAwesome className='text-teal-600' />
							<span className='font-semibold text-gray-800'>
								Self Development
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advertisement

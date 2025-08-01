import { PsychologyAlt } from '@mui/icons-material'

const Features = () => {
	return (
		<section className='bg-[#f2f2f2] py-16'>
			<div className='max-w-7xl mx-auto px-4 text-center'>
				<p className='text-teal-600 font-semibold uppercase'>
					Education For Everyone
				</p>
				<h2 className='text-4xl font-extrabold text-gray-900 mt-2 mb-4'>
					Online Coaching Lessons For <br /> Remote Learning
				</h2>
				<p className='text-gray-600 max-w-2xl mx-auto'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>

				<div className='flex flex-wrap justify-center gap-8 mt-12'>
					{/* Card 1 */}
					<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
						<div className='flex flex-col justify-center gap-4'>
							<div className='text-teal-600 text-6xl'>
								<PsychologyAlt fontSize='inherit' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900'>
								Learn the Latest Skills
							</h3>
							<p className='text-gray-600'>
								Learning top skills can bring an extra-ordinary outcome in a
								career.
							</p>
							<div className='flex justify-center'>
								<p
									className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
								>
									Start Now!
								</p>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
						<div className='flex flex-col justify-center gap-4'>
							<div className='text-teal-600 text-6xl'>
								<PsychologyAlt fontSize='inherit' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900'>
								Learn the Latest Skills
							</h3>
							<p className='text-gray-600'>
								Learning top skills can bring an extra-ordinary outcome in a
								career.
							</p>
							<div className='flex justify-center'>
								<p
									className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
								>
									Start Now!
								</p>
							</div>
						</div>
					</div>

					{/* Card 3 */}
					<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
						<div className='flex flex-col justify-center gap-4'>
							<div className='text-teal-600 text-6xl'>
								<PsychologyAlt fontSize='inherit' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900'>
								Learn the Latest Skills
							</h3>
							<p className='text-gray-600'>
								Learning top skills can bring an extra-ordinary outcome in a
								career.
							</p>
							<div className='flex justify-center'>
								<p
									className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
								>
									Start Now!
								</p>
							</div>
						</div>
					</div>

					{/* Card 4 */}
					<div className='bg-white w-[280px] h-[300px] p-8 rounded-sm shadow-xs hover:-translate-y-2 transition duration-400 flex flex-col justify-center gap-4'>
						<div className='flex flex-col justify-center gap-4'>
							<div className='text-teal-600 text-6xl'>
								<PsychologyAlt fontSize='inherit' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900'>
								Learn the Latest Skills
							</h3>
							<p className='text-gray-600'>
								Learning top skills can bring an extra-ordinary outcome in a
								career.
							</p>
							<div className='flex justify-center'>
								<p
									className='text-teal-600 text-sm font-semibold cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600 
				after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 inline-block'
								>
									Start Now!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features

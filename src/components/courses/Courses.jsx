import CoursesCard from './CoursesCard'
import { coursesData } from './coursesData'

const Courses = () => {
	return (
		<>
			<section className='bg-[#f2f2f2] w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[280px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 gap-4'>
				<h1 className='font-extrabold text-4xl lg:text-5xl text-center text-gray-800'>
					Courses
				</h1>
			</section>

			<section className='flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-16'>
				<div className='w-full max-w-7xl'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
						{coursesData.map((course) => (
							<CoursesCard
								key={course.id}
								course={course}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Courses

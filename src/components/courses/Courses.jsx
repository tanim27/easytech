import CoursesCard from './CoursesCard'
import { coursesData } from './coursesData'

const Courses = () => {
	return (
		<>
			<div className='bg-[#f2f2f2] w-full h-[200px] md:h-[250px] flex justify-center items-center'>
				<h1 className='font-extrabold text-4xl md:text-5xl text-center text-gray-800 mb-12'>
					Courses
				</h1>
			</div>

			<div className='min-h-screen flex justify-center items-center px-4 md:px-8 py-12'>
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
			</div>
		</>
	)
}

export default Courses

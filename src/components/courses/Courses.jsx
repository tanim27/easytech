'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import CoursesCard from './CoursesCard'
import { coursesData } from './coursesData'

const Courses = () => {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('search') || ''
	const [filteredCourses, setFilteredCourses] = useState(coursesData)

	useEffect(() => {
		if (searchTerm) {
			setFilteredCourses(
				coursesData.filter((course) =>
					course.title.toLowerCase().includes(searchTerm.toLowerCase()),
				),
			)
		} else {
			setFilteredCourses(coursesData)
		}
	}, [searchTerm])

	return (
		<>
			<section className='bg-[#f2f2f2] w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[280px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 gap-4'>
				<h1 className='font-extrabold text-4xl lg:text-5xl text-center text-gray-800'>
					Courses
				</h1>
				{searchTerm && (
					<p className='text-gray-600 text-lg'>
						Showing results for "
						<span className='font-semibold'>{searchTerm}</span>"
					</p>
				)}
			</section>

			<section className='flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-16'>
				<div className='w-full max-w-7xl'>
					{filteredCourses.length > 0 ? (
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
							{filteredCourses.map((course) => (
								<CoursesCard
									key={course.id}
									course={course}
								/>
							))}
						</div>
					) : (
						<p className='text-gray-500 text-lg text-center'>
							No courses found matching "{searchTerm}"
						</p>
					)}
				</div>
			</section>
		</>
	)
}

export default Courses

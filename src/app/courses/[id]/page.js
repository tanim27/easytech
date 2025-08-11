'use client'

import { useParams } from 'next/navigation'

import CourseDetails from '@/components/course-details/CourseDetails'
import { coursesData } from '@/components/courses/coursesData'

const CourseDetailsPage = () => {
	const { id } = useParams()
	const course = coursesData.find((c) => c.id.toString() === id)

	if (!course) {
		return <p className='text-center mt-20'>Course not found</p>
	}

	return <CourseDetails course={course} />
}

export default CourseDetailsPage

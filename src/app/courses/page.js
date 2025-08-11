import Courses from '@/components/courses/Courses'
import { Suspense } from 'react'

export const metadata = {
	title: 'EasyTech | Courses',
	description: 'This is the courses page.',
}

const CoursesPage = () => {
	return (
		<Suspense fallback={<div>Loading courses...</div>}>
			<Courses />
		</Suspense>
	)
}

export default CoursesPage

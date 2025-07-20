import CoursesCard from '@/components/courses/CoursesCard'

const courses = [
	{
		id: 1,
		title: 'রিয়্যাক্টিভ এক্সিলারেটর',
		description:
			'ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিয়্যাক্ট ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে সাহায্য করবে বলে আমাদের বিশ্বাস।',
		image: '/assets/hero-image.jpg',
		duration: '15 Hours',
		classes: '10 Classes',
		price: '$1100',
	},
	{
		id: 2,
		title: 'Next.js for Beginners Next.js for Beginners Next.js for Beginners',
		description:
			'Start building SEO-friendly, full-stack apps with Next.js in Bangla. Start building SEO-friendly, full-stack apps with Next.js in Bangla. Start building SEO-friendly, full-stack apps with Next.js in Bangla.',
		image: '/assets/hero-image.jpg',
		duration: '12 Hours',
		classes: '8 Classes',
		price: '$1000',
	},
	{
		id: 3,
		title: 'Tailwind CSS Mastery',
		description:
			'Design stunning, responsive UIs fast using Tailwind CSS from scratch.',
		image: '/assets/hero-image.jpg',
		duration: '10 Hours',
		classes: '7 Classes',
		price: '$950',
	},
	{
		id: 4,
		title: 'Master React in Bangla',
		description:
			'Learn modern React fundamentals with practical projects and expert Bangla instruction.',
		image: '/assets/hero-image.jpg',
		duration: '15 Hours',
		classes: '10 Classes',
		price: '$1100',
	},
	{
		id: 5,
		title: 'Next.js for Beginners',
		description:
			'Start building SEO-friendly, full-stack apps with Next.js in Bangla.',
		image: '/assets/hero-image.jpg',
		duration: '12 Hours',
		classes: '8 Classes',
		price: '$1000',
	},
	{
		id: 6,
		title: 'Tailwind CSS Mastery',
		description:
			'Design stunning, responsive UIs fast using Tailwind CSS from scratch.',
		image: '/assets/hero-image.jpg',
		duration: '10 Hours',
		classes: '7 Classes',
		price: '$950',
	},
	{
		id: 7,
		title: 'Master React in Bangla',
		description:
			'Learn modern React fundamentals with practical projects and expert Bangla instruction.',
		image: '/assets/hero-image.jpg',
		duration: '15 Hours',
		classes: '10 Classes',
		price: '$1100',
	},
	{
		id: 8,
		title: 'Next.js for Beginners',
		description:
			'Start building SEO-friendly, full-stack apps with Next.js in Bangla.',
		image: '/assets/hero-image.jpg',
		duration: '12 Hours',
		classes: '8 Classes',
		price: '$1000',
	},
	{
		id: 9,
		title: 'Tailwind CSS Mastery',
		description:
			'Design stunning, responsive UIs fast using Tailwind CSS from scratch.',
		image: '/assets/hero-image.jpg',
		duration: '10 Hours',
		classes: '7 Classes',
		price: '$950',
	},
]

const CoursePage = () => {
	return (
		<div className='min-h-screen flex justify-center items-center px-4 md:px-8 py-12'>
			<div className='w-full max-w-7xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
					{courses.map((course) => (
						<CoursesCard
							key={course.id}
							course={course}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CoursePage

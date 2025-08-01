// import required modules
import Advertisement from './Advertisement'
import Banner from './Banner'
import Features from './Features'
import PromoSection from './PromoSection'
import Stats from './Stats'
import TopSellingCourses from './TopSellingCourses'

const Home = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000))

	return (
		<main className=''>
			<Banner />

			<Features />

			<Advertisement />

			<Stats />

			<TopSellingCourses />

			<PromoSection />
		</main>
	)
}

export default Home

import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

const axiosRequest = async ({ req, ...options }) => {
	const onSuccess = (res) => res.data
	const onError = (err) => {
		throw err.response?.data || 'An error occurred'
	}

	return axios({ ...options })
		.then(onSuccess)
		.catch(onError)
}

export default axiosRequest

import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const axiosRequest = async (options) => {
	const onSuccess = (res) => res.data
	const onError = (err) => {
		throw err.response?.data || 'An error occurred'
	}

	return axios(options).then(onSuccess).catch(onError)
}

export default axiosRequest

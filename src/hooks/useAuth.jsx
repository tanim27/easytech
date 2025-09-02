import axiosRequest from '@/utils/axiosRequest'
import { useMutation } from '@tanstack/react-query'

export const useUserRegister = () => {
	return useMutation({
		mutationKey: 'register',
		mutationFn: async (body) =>
			await axiosRequest({
				url: '/api/auth/signup',
				method: 'POST',
				data: body,
			}),
	})
}

export const useUserLogin = () => {
	return useMutation({
		mutationKey: 'login',
		mutationFn: async (body) =>
			await axiosRequest({
				url: '/api/auth/login',
				method: 'POST',
				data: body,
			}),
	})
}

export const useForgotPasswordWithEmail = () => {
	return useMutation({
		mutationFn: async (body) =>
			await axiosRequest({
				url: '/api/auth/forgot-password/email',
				method: 'POST',
				data: body,
			}),
	})
}

export const useResetPassword = (token) => {
	return useMutation({
		mutationFn: async (body) =>
			await axiosRequest({
				url: `/api/auth/reset-password/${token}`,
				method: 'POST',
				data: body,
			}),
	})
}

export const useChangePassword = () => {
	return useMutation({
		mutationFn: (body) =>
			axiosRequest({
				url: `/api/auth/change-password`,
				method: 'POST',
				data: body,
			}),
	})
}

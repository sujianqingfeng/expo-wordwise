import Toast from 'react-native-toast-message'
import type { BaseResp } from '~/api/types'
import { tokenStorage } from './storage'

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL

function createFetcher(method: string) {
	return async <T = any>(url: string, { arg }: { arg?: any } = {}) => {
		const body = arg ? new URLSearchParams(arg) : undefined
		const originalUrl = `${BASE_URL}${url}`

		const headers: HeadersInit = {}
		const token = await tokenStorage.getToken()
		if (token) {
			headers.Authorization = `Bearer ${token}`
		}

		const result = await fetch(originalUrl, {
			headers,
			method,
			body,
		})

		const json = await result.json()

		const { code, data, msg } = json as BaseResp<T>
		if (code === 0) {
			return data
		}

		if (msg) {
			Toast.show({
				type: 'error',
				text1: msg,
			})
		}

		return Promise.reject(msg)
	}
}

export const fetcher = createFetcher('GET')
export const postFetcher = createFetcher('POST')

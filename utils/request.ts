import Toast from 'react-native-toast-message'
import type { BaseResp } from '~/api/types'

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL

function createFetcher(method: string) {
	return async <T = any>(url: string, { arg }: { arg: any }) => {
		const body = arg ? new URLSearchParams(arg) : undefined
		const originalUrl = `${BASE_URL}${url}`

		const result = await fetch(originalUrl, {
			method,
			body,
		})

		const json = await result.json()

		const { code, data, msg } = json as BaseResp<T>
		if (code === 0) {
			return { result: data }
		}

		if (msg) {
			Toast.show({
				type: 'error',
				text1: msg,
			})
		}

		return { error: new Error(msg) }
	}
}

export const postFetcher = createFetcher('POST')

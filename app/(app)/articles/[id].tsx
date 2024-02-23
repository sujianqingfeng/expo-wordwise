import { useLocalSearchParams } from 'expo-router'
import { WebView, type WebViewMessageEvent } from 'react-native-webview'
import useSWR from 'swr'
import type { ReadLaterResp } from '~/api/types'
import { fetcher } from '~/utils/request'

export default function ArticlePage() {
	const { id } = useLocalSearchParams()
	console.log('🚀 ~ ArticlePage ~ id:', id)

	const { data } = useSWR(`/read-later/${id}`, fetcher<ReadLaterResp>)

	console.log('🚀 ~ ArticlePage ~ data:', data)
	const onMessage = (event: WebViewMessageEvent) => {
		console.log('event', event)
	}

	return (
		<WebView
			javaScriptEnabled={true}
			onMessage={onMessage}
			source={{ uri: 'https://www.google.com' }}
		/>
	)
}

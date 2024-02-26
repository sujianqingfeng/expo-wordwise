import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { WebView, type WebViewMessageEvent } from 'react-native-webview'
import useSWR from 'swr'
import type { ReadLaterResp } from '~/api/types'
import ErrorBoundary from '~/components/Error'
import { fetcher } from '~/utils/request'

export default function ArticlePage() {
	const { id } = useLocalSearchParams()
	const navigator = useNavigation()
	const { data, error } = useSWR(`/read-later/${id}`, fetcher<ReadLaterResp>)

	useEffect(() => {
		navigator.setOptions({
			title: data?.title,
		})
	}, [navigator, data])

	if (error || !data) {
		return <ErrorBoundary />
	}

	const onMessage = (event: WebViewMessageEvent) => {
		console.log('event', event)
	}

	return (
		<WebView
			javaScriptEnabled={true}
			onMessage={onMessage}
			source={{ html: data.content }}
		/>
	)
}

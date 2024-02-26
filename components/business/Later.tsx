import { FlatList } from 'react-native'
import LaterItem from './LaterItem'
import { useRouter } from 'expo-router'
import useSWRInfinite from 'swr/infinite'
import { fetcher } from '~/utils/request'
import type { PageResp, ReadLaterResp } from '~/api/types'
import ErrorBoundary from '../Error'

function Later() {
	const getKey = (
		pageIndex: number,
		previousPageData: { result: null | PageResp<ReadLaterResp> },
	) => {
		if (previousPageData) {
			const { result } = previousPageData
			if (result?.hasNextPage) {
				return null
			}
		}

		return `/read-later/list?page=${pageIndex + 1}&size=10`
	}

	const { data, setSize, size, error } = useSWRInfinite(
		getKey,
		fetcher<PageResp<ReadLaterResp>>,
	)

	if (error) {
		return <ErrorBoundary />
	}

	const router = useRouter()
	const onItemPress = (id: string) => {
		router.push(`/articles/${id}`)
	}

	const list = (data || []).flatMap((item) => {
		return item.data
	})

	return (
		<FlatList
			className="w-full"
			data={list}
			renderItem={({ item }) => (
				<LaterItem item={item} onItemPress={onItemPress} />
			)}
			keyExtractor={(item) => item.id}
			onEndReachedThreshold={0.1}
			onEndReached={() => setSize(size + 1)}
		/>
	)
}

export default Later

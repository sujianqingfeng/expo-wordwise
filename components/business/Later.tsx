import { FlatList } from 'react-native'
import LaterItem from './LaterItem'
import { useRouter } from 'expo-router'
import useSWRInfinite from 'swr/infinite'
import { fetcher } from '~/utils/request'

const DATA = [
	{ id: '1', title: 'title1', description: 'description1' },
	{ id: '2', title: 'title2', description: 'description2' },
]

function Later() {
	const router = useRouter()

	const onItemPress = (id: string) => {
		router.push(`/article/${id}`)
	}

	const getKey = (pageIndex: number, previousPageData: any) => {
		console.log('🚀 ~ getKey ~ previousPageData:', previousPageData)
		console.log('🚀 ~ getKey ~ pageIndex:', pageIndex)
		return `/read-later/list?page=${pageIndex}&size=10`
	}

	const { data } = useSWRInfinite(getKey, fetcher)
	console.log('🚀 ~ Later ~ data:', data)

	return (
		<FlatList
			data={DATA}
			renderItem={({ item }) => (
				<LaterItem {...item} onItemPress={onItemPress} />
			)}
			keyExtractor={(item) => item.id}
		/>
	)
}

export default Later

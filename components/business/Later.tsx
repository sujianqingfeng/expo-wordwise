import { FlatList, View } from 'react-native'
import LaterItem from './LaterItem'

const DATA = [
	{ id: '1', title: 'title1', description: 'description1' },
	{ id: '2', title: 'title2', description: 'description2' },
]

function Later() {
	return (
		<FlatList
			data={DATA}
			renderItem={({ item }) => <LaterItem {...item} />}
			keyExtractor={(item) => item.id}
		/>
	)
}

export default Later

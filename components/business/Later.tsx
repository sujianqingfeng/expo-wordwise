import { FlatList, View } from 'react-native'
import LaterItem from './LaterItem'

const DATA = [
	{ id: '1', title: 'title1', description: 'description1' },
	{ id: '2', title: 'title2', description: 'description2' },
]

function Later() {
	return (
		// <FlatList
		// 	data={DATA}
		// 	renderItem={({ item }) => <View>{item.title}</View>}
		// 	keyExtractor={(item) => item.id}
		// />
		<LaterItem title="title" description="description" />
	)
}

export default Later

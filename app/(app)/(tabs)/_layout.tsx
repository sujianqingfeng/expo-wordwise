import { Tabs } from 'expo-router'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

export default function HomeLayout() {
	return (
		<Tabs initialRouteName="list">
			<Tabs.Screen
				name="index"
				options={{
					title: 'List',
					tabBarIcon: ({ size, color }) => (
						<Entypo name="list" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="mine"
				options={{
					title: 'Mine',
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name="person" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	)
}

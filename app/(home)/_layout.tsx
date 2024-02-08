import { Tabs } from 'expo-router'

export default function HomeLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="list"
				options={{
					href: '/index',
				}}
			/>
			<Tabs.Screen
				name="mine"
				options={{
					href: '/mine',
				}}
			/>
		</Tabs>
	)
}

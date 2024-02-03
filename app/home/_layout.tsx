import { Tabs } from 'expo-router'

export default function HomeLayout() {
	return (
		<Tabs>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="mine" />
		</Tabs>
	)
}

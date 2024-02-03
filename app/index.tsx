import { Redirect } from 'expo-router'
import { View } from 'react-native'

export default function Page() {
	const user = false

	if (!user) {
		return <Redirect href="/login" />
	}

	return <View>ffff</View>
}

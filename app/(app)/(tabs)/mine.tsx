import { Stack, router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function MinePage() {
	const onAccount = () => {
		router.push('/account')
	}
	return (
		<View>
			<Stack.Screen options={{ headerShown: false }} />
			mine
			<Pressable onPress={onAccount}>
				<Text>Account</Text>
			</Pressable>
		</View>
	)
}

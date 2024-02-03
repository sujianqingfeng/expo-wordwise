import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function MinePage() {
	const onAccount = () => {
		router.push('/account')
	}
	return (
		<View>
			mine
			<Pressable onPress={onAccount}>
				<Text>Account</Text>
			</Pressable>
		</View>
	)
}

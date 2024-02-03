import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function LoginPage() {
	const onLogin = () => {
		router.push('/home')
	}

	return (
		<View>
			<Pressable onPress={onLogin}>
				<Text>login</Text>
			</Pressable>
		</View>
	)
}

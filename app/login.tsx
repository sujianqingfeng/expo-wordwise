import { Stack, router } from 'expo-router'
import { Pressable, Text, TextInput, View } from 'react-native'

export default function LoginPage() {
	const onLogin = async () => {
		router.push('/home')
	}

	return (
		<View className="h-screen w-screen px-8 flex flex-col justify-center items-center gap-2">
			<Stack.Screen options={{ headerShown: false }} />
			<Text className="text-lg">Sing in</Text>
			<TextInput className="w-full border p-2 rounded-sm" placeholder="email" />

			<View className="w-full flex flex-row justify-start items-center gap-2">
				<TextInput
					className="border p-2 rounded-sm flex-auto"
					placeholder="code"
					keyboardType="numeric"
				/>

				<Pressable>
					<View className="border rounded-sm px-2 py-1">get code</View>
				</Pressable>
			</View>
			<Pressable className="w-full" onPress={onLogin}>
				<View className="bg-slate-400 rounded-sm text-center p-2">login</View>
			</Pressable>
		</View>
	)
}

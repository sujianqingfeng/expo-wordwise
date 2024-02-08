import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import useSWRMutation from 'swr/mutation'
import type { SignIn, SignInResp } from '~/api/types'
import { SignInSchema } from '~/api/validations'
import { useZodParse } from '~/hooks/parse'
import { postFetcher } from '~/utils/request'
import { tokenStorage } from '~/utils/storage'
import { EvilIcons } from '@expo/vector-icons'

export default function LoginPage() {
	const [form, setForm] = useState<SignIn>({
		email: '',
		password: '',
	})

	const { trigger: signTrigger, isMutating } = useSWRMutation(
		'/auth/sign-in',
		postFetcher<SignInResp>,
	)
	const { zodParse } = useZodParse()
	const router = useRouter()

	const onLogin = async () => {
		const { success } = zodParse(() => SignInSchema.safeParse(form))
		if (!success) {
			return
		}
		const { error, result } = await signTrigger(form)

		if (error) {
			return
		}
		await tokenStorage.setToken(result.token)
		router.replace('/')
	}

	return (
		<View className="h-screen w-screen px-8 flex flex-col justify-center items-center gap-2">
			<Stack.Screen options={{ headerShown: false }} />
			<Text className="text-lg">Sign in</Text>

			<TextInput
				className="w-full border p-2 rounded-sm"
				placeholder="email"
				value={form.email}
				onChangeText={(text) => setForm({ ...form, email: text })}
			/>
			<TextInput
				className="w-full border p-2 rounded-sm"
				placeholder="password"
				value={form.password}
				onChangeText={(text) => setForm({ ...form, password: text })}
			/>

			<Pressable className="w-full" onPress={onLogin} disabled={isMutating}>
				<View className="bg-slate-400 rounded-sm p-2 flex flex-row justify-center items-center gap-2">
					{isMutating && (
						<EvilIcons
							className="animate-spin"
							name="spinner-3"
							size={24}
							color="black"
						/>
					)}
					login
				</View>
			</Pressable>
		</View>
	)
}

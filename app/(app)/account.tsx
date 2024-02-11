import { Pressable, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useModal } from 'react-native-modalfy'
import { tokenStorage } from '~/utils/storage'
import { useSessionContext } from '~/components/SessionContext'
import { useRouter } from 'expo-router'

export default function AccountPage() {
	const { openModal } = useModal()
	const { dispatch } = useSessionContext()
	const router = useRouter()

	const signOut = () => {
		openModal('SignOutModal', {
			confirm: () => {
				tokenStorage.setToken('')
				dispatch({
					type: 'SET_TOKEN',
					payload: '',
				})
				router.replace('/sign-in')
			},
		})
	}

	return (
		<View className="p-2">
			<View className="flex bg-slate-400/10 rounded-md">
				<View className="px-2 py-3 flex flex-row justify-between items-center">
					<Text>Username</Text>
					<Text>User name</Text>
				</View>
				<View className="h-[1px] mx-2 bg-slate-400/20" />
				<View className="px-2 py-3 flex flex-row justify-between items-center">
					<Text>Email</Text>
					<Text>User name</Text>
				</View>
			</View>

			<Pressable className="mt-2" onPress={signOut}>
				<View className="px-2 py-3 bg-slate-400/10 rounded-md flex flex-row justify-between items-center">
					<Text> Sign out</Text>
					<FontAwesome name="angle-right" size={24} color="rgb(148 163 184)" />
				</View>
			</Pressable>
		</View>
	)
}

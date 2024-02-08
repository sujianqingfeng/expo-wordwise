import { Stack, useRouter, useSegments } from 'expo-router'
import Toast from 'react-native-toast-message'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../global.css'
import { useEffect, useState } from 'react'
import { tokenStorage } from '~/utils/storage'
import { Session } from '~/types'
import { SessionContext } from '~/hooks/session'

export default function RootLayout() {
	const [session, setSession] = useState<Session | null>(null)
	const router = useRouter()
	const segments = useSegments()

	useEffect(() => {
		const getSession = async () => {
			const token = await tokenStorage.getToken()
			setSession({ token })
		}

		getSession()
	}, [])

	useEffect(() => {
		const inAuthGroup = segments[0] === '(auth)'
		console.log('🚀 ~ useEffect ~ inAuthGroup:', inAuthGroup)
		console.log('🚀 ~ useEffect ~ session:', session)
		if (!session) {
			return
		}

		if (!session.token && !inAuthGroup) {
			router.replace('/sign-in')
		} else if (session.token && inAuthGroup) {
			// router.replace('/')
		}
	}, [segments, session])

	return (
		<SessionContext.Provider value={session}>
			<SafeAreaProvider>
				<Stack />
				<Toast />
			</SafeAreaProvider>
		</SessionContext.Provider>
	)
}

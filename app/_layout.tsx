import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../global.css'
import { SessionProvider } from '~/components/SessionContext'

export default function RootLayout() {
	return (
		<SessionProvider>
			<SafeAreaProvider>
				<Slot />
				<Toast />
			</SafeAreaProvider>
		</SessionProvider>
	)
}

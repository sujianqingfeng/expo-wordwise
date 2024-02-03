import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../global.css'

export default function AppLayout() {
	return (
		<SafeAreaProvider>
			<Stack />
		</SafeAreaProvider>
	)
}

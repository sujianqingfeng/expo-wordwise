import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../global.css'
import { SessionProvider } from '~/components/SessionContext'
import { ModalProvider, createModalStack } from 'react-native-modalfy'
import SignOutModal from '~/components/business/modals/SignOutModal'

const stack = createModalStack(
	{ SignOutModal },
	{
		backdropOpacity: 0.6,
		position: 'bottom',
	},
)

export default function RootLayout() {
	return (
		<SessionProvider>
			<SafeAreaProvider>
				<ModalProvider stack={stack}>
					<Slot />
					<Toast />
				</ModalProvider>
			</SafeAreaProvider>
		</SessionProvider>
	)
}

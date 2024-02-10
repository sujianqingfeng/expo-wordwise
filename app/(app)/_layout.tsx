import { Redirect, Stack } from 'expo-router'
import { useSessionContext } from '~/components/SessionContext'

export default function AppLayout() {
	const { state } = useSessionContext()

	if (!state.token) {
		return <Redirect href="/sign-in" />
	}

	return <Stack />
}

import { SessionContext } from '~/hooks/session'
import { useEffect, useState } from 'react'
import { tokenStorage } from '~/utils/storage'
import { Session } from '~/types'
import { useRouter } from 'expo-router'

export default function SessionProvider(children: JSX.Element) {
	const [session, setSession] = useState<Session | null>(null)
	const router = useRouter()

	useEffect(() => {
		const getSession = async () => {
			const token = await tokenStorage.getToken()
			if (token) {
				setSession({ token })
				router.replace('/home')
				return
			}

			router.replace('/sign-in')
		}

		getSession()
	}, [])

	return (
		<SessionContext.Provider value={session}>
			{children}
		</SessionContext.Provider>
	)
}

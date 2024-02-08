import { createContext, useContext } from 'react'
import type { Session } from '~/types'

export const SessionContext = createContext<Session | null>(null)

export function useSession() {
	const session = useContext(SessionContext)
	return session
}

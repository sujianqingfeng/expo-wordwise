import { createContext, useContext, useEffect, useReducer } from 'react'
import { tokenStorage } from '~/utils/storage'

interface SessionState {
	token: string
}

type SessionAction = {
	type: 'SET_TOKEN'
	payload: string
}

const SessionContext = createContext<{
	state: SessionState
	dispatch: React.Dispatch<SessionAction>
} | null>(null)

function sessionReducer(state: SessionState, action: SessionAction) {
	switch (action.type) {
		case 'SET_TOKEN':
			return { ...state, token: action.payload }
		default:
			return state
	}
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(sessionReducer, { token: '' })

	useEffect(() => {
		tokenStorage.getToken().then((token) => {
			if (token) {
				dispatch({ type: 'SET_TOKEN', payload: token })
			}
		})
	}, [])

	return (
		<SessionContext.Provider value={{ state, dispatch }}>
			{children}
		</SessionContext.Provider>
	)
}

export const useSessionContext = () => {
	const context = useContext(SessionContext)
	if (!context) {
		throw new Error('useSessionContext must be used within a SessionProvider')
	}

	return context
}

import { View } from 'react-native'
import { useSessionContext } from '~/components/SessionContext'

export default function Page() {
	const sessionContext = useSessionContext()
	console.log('🚀 ~ Page ~ sessionContext:', sessionContext)
	return <View>list</View>
}

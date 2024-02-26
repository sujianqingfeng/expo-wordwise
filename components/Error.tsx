import { Text, View } from 'react-native'

interface ErrorProps {
	text?: string
}

export default function ErrorBoundary(props: ErrorProps) {
	const { text = 'error' } = props
	return (
		<View className="w-full text-center">
			<Text className="text-md">{text}</Text>
		</View>
	)
}

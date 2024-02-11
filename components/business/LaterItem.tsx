import { View } from 'react-native'

interface LaterItemProps {
	title: string
	description: string
}

function LaterItem(props: LaterItemProps) {
	const { title, description } = props
	return (
		<View className="p-2 flex flex-row justify-between items-center">
			<View>
				<View className="text-xl font-bold">{title}</View>
				<View>{description}</View>
			</View>
			<View>2024/10/1</View>
		</View>
	)
}

export default LaterItem

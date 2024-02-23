import { Pressable, Text, View } from 'react-native'

interface LaterItemProps {
	id: string
	title: string
	description: string
	onItemPress?: (id: string) => void
}

function LaterItem(props: LaterItemProps) {
	const { id, title, description, onItemPress } = props
	const onPress = () => {
		onItemPress?.(id)
	}
	return (
		<Pressable onPress={onPress}>
			<View className="p-2 flex flex-row justify-between items-center">
				<View>
					<View className="text-xl font-bold">
						<Text>{title}</Text>
					</View>
					<View>
						<Text>{description}</Text>
					</View>
				</View>
				<View>
					<Text>2024/10/1</Text>
				</View>
			</View>
		</Pressable>
	)
}

export default LaterItem

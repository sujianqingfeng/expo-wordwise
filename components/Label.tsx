import { Pressable, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export interface LabelProps {
	title: string
	desc: string
	link?: string
}

function Label(props: LabelProps) {
	const { title, desc, link } = props
	const router = useRouter()
	const onPress = () => {
		if (link) {
			router.push(link)
		}
	}

	return (
		<Pressable onPress={onPress}>
			<View className="p-2 flex flex-row justify-between items-center">
				<View>
					<View className="font-bold">
						<Text>{title}</Text>
					</View>
					<View className="text-sm">
						<Text>{desc}</Text>
					</View>
				</View>

				<View>
					<FontAwesome name="angle-right" size={24} color="black" />
				</View>
			</View>
		</Pressable>
	)
}

export default Label

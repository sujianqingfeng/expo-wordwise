import { Pressable, Text, View } from 'react-native'
import type { ReadLaterResp } from '~/api/types'
import { format } from 'date-fns'

interface LaterItemProps {
	item: ReadLaterResp
	onItemPress?: (id: string) => void
}

function LaterItem(props: LaterItemProps) {
	const { item, onItemPress } = props

	const { id, title, desc, publishedTime } = item
	const onPress = () => {
		onItemPress?.(id)
	}
	return (
		<Pressable onPress={onPress}>
			<View className="p-2 flex flex-row justify-between items-center">
				<View className="flex-auto">
					<View className="">
						<Text
							className="text-xl font-bold"
							ellipsizeMode="tail"
							numberOfLines={1}
						>
							{title}
						</Text>
					</View>

					<View>
						<Text numberOfLines={1} ellipsizeMode="tail">
							{desc}
						</Text>
					</View>
				</View>
				<View>
					<Text>{format(publishedTime, 'MM/dd')} </Text>
				</View>
			</View>
		</Pressable>
	)
}

export default LaterItem

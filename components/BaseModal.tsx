import { Pressable, Text, View } from 'react-native'

export type BaseModalProps = {
	children: React.ReactElement
	confirm?: () => void
	closeModal: () => void
}

function BaseModal(props: BaseModalProps) {
	const { closeModal, children, confirm } = props

	const onCancel = () => {
		closeModal()
	}

	const onConfirm = () => {
		confirm?.()
	}

	return (
		<View className="bg-white w-screen rounded-md">
			<View className="p-2">{children}</View>

			<View className="flex flex-row justify-between items-center">
				<Pressable className="flex-1" onPress={onCancel}>
					<Text className="font-bold text-center p-2">Cancel</Text>
				</Pressable>
				<Pressable className="flex-1" onPress={onConfirm}>
					<Text className="font-bold text-center p-2">Confirm</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default BaseModal

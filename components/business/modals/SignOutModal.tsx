import { Text, View } from 'react-native'
import BaseModal from '~/components/BaseModal'
import type { ModalProps } from 'react-native-modalfy'

type SignOutModalProps = ModalProps<
	'SignOutModal',
	{
		confirm: () => void
	}
>

function SignOutModal(props: SignOutModalProps) {
	const { modal } = props

	const onConfirm = () => {
		const confirm = modal.getParam('confirm')
		modal.closeModal()
		confirm()
	}

	return (
		<BaseModal closeModal={modal.closeModal} confirm={onConfirm}>
			<View className="text-center">
				<Text className="text-lg">you want to sign out?</Text>
			</View>
		</BaseModal>
	)
}

export default SignOutModal

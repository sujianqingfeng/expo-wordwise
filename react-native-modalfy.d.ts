import 'react-native-modalfy'
import { ModalStackParams } from './types'

declare module 'react-native-modalfy' {
	interface ModalfyCustomParams extends ModalStackParams {}
}

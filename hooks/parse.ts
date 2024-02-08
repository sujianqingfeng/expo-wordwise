import Toast from 'react-native-toast-message'
import type { SafeParseReturnType } from 'zod'

export function useZodParse() {
	const zodParse = <Output = unknown, Input = Output>(
		parseFn: () => SafeParseReturnType<Input, Output>,
	) => {
		const result = parseFn()

		if (!result.success) {
			Toast.show({
				type: 'error',
				text1: result.error.errors[0].message,
			})
		}

		return result
	}

	return {
		zodParse,
	}
}

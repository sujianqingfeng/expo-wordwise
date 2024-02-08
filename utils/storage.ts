import AsyncStorage from '@react-native-async-storage/async-storage'

const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const setItem = (key: string, value: any) => {
	return AsyncStorage.setItem(key, JSON.stringify(value))
}

export const getItem = async <T = any>(
	key: string,
	defaultValue: any = null,
): Promise<T> => {
	const data = await AsyncStorage.getItem(key)
	if (data) {
		const value = JSON.parse(data)
		return value
	}

	return defaultValue
}

type SpecificStorage<T extends string, R> = {
	[K in `set${Capitalize<T>}`]: (value: any) => Promise<void>
} & {
	[K in `get${Capitalize<T>}`]: (defaultValue?: any) => Promise<R>
}

const createSpecificStorage = <T extends string, R = any>(key: string) => {
	const capitalizeKey = capitalize(key)

	return {
		[`set${capitalizeKey}`]: async (value: any) => {
			return setItem(key, value)
		},
		[`get${capitalizeKey}`]: async <T = any>(
			defaultValue: any = null,
		): Promise<T> => {
			return getItem<T>(key, defaultValue)
		},
	} as SpecificStorage<T, R>
}

export const tokenStorage = createSpecificStorage<'token', string>('token')

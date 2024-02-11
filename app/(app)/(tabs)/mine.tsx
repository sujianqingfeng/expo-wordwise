import { Stack } from 'expo-router'
import { ScrollView, View } from 'react-native'
import Label, { LabelProps } from '~/components/Label'

const DATA: LabelProps[] = [
	{
		title: 'Account',
		desc: 'Manage your account',
		link: '/account',
	},
]

export default function MinePage() {
	return (
		<View>
			<Stack.Screen options={{ headerShown: false }} />

			<ScrollView>
				{DATA.map((item) => (
					<Label key={item.title} {...item} />
				))}
			</ScrollView>
		</View>
	)
}

import { Stack } from 'expo-router'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ListTabBar from '~/components/ListTabBar'
import Later from '~/components/business/Later'
import Subscription from '~/components/business/Subscription'

const Tab = createMaterialTopTabNavigator()

export default function Page() {
	return (
		<View className="flex-1">
			<Stack.Screen options={{ headerShown: false }} />
			<Tab.Navigator
				initialRouteName="Later"
				tabBar={(props) => <ListTabBar {...props} />}
			>
				<Tab.Screen
					name="Later"
					component={Later}
					options={{ tabBarLabel: 'Later' }}
				/>

				<Tab.Screen
					name="Subscription"
					component={Subscription}
					options={{ tabBarLabel: 'Subscription' }}
				/>
			</Tab.Navigator>
		</View>
	)
}

import type { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { Animated, View, TouchableOpacity } from 'react-native'

function ListTabBar({
	state,
	descriptors,
	navigation,
}: MaterialTopTabBarProps) {
	return (
		<View style={{ flexDirection: 'row' }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const label = options.tabBarLabel as string

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params)
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}

				return (
					<TouchableOpacity
						key={label}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}
					>
						<Animated.Text style={{ opacity: isFocused ? 1 : 0.6 }}>
							{label}
						</Animated.Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default ListTabBar

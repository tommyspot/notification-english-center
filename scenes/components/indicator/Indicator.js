import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default class Indicator extends React.PureComponent {
	render() {
		return (
			<View style={Styles.indicator}>
				<ActivityIndicator />
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	indicator: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});


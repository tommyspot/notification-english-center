import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from './constants';

export default class App extends React.PureComponent {
	render() {
		const textColor = COLORS.red;
		return (
			<View style={styles.container}>
				<Text style={{ color: textColor }}>Thaotest</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
});


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Dashboard extends React.PureComponent {
	render() {
		return (
			<View style={Styles.mainPage}>
				<Text>Dashboard Container</Text>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	mainPage: {
		padding: 20,
	}
});

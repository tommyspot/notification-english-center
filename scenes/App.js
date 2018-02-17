import React from 'react';
import { AppState, View, Text, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';

import { COLORS } from './constants';
import PushNotificationController from './PushNotificationController';

export default class App extends React.PureComponent {
	componentDidMount() {
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	}

	handleAppStateChange(appState) {
		if (appState === 'background') {
			PushNotification.localNotification({ message: 'thaotest' });

			PushNotification.getApplicationIconBadgeNumber((value) => {
				PushNotification.setApplicationIconBadgeNumber(value + 1);
			});
		} else if (appState === 'active') {
			PushNotification.setApplicationIconBadgeNumber(0);
		}
	}

	render() {
		const textColor = COLORS.red;
		return (
			<View style={styles.container}>
				<Text style={{ color: textColor }}>Thaotest</Text>
				<PushNotificationController />
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


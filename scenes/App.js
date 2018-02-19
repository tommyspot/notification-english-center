import React from 'react';
import { AppState, SafeAreaView, Image, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import TabNavigator from 'react-native-tab-navigator';

import { COLORS } from './constants';

import Home from './home';
import Dashboard from './dashboard';
import Vocabulary from './vocabulary';

export default class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home',
		};
	}

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

	handleNavigate(tab) {
		this.setState({ selectedTab: tab });
	}

	renderIcon(source) {
		return <Image source={source} style={Styles.icon} />;
	}

	render() {
		const { selectedTab } = this.state;

		return (
			<SafeAreaView style={Styles.mainPage}>
				<TabNavigator>
					<TabNavigator.Item
						selected={selectedTab === 'home'}
						title="Home"
						renderIcon={() => this.renderIcon(require('./images/courses.png'))}
						onPress={() => this.handleNavigate('home')}>
						<Home/>
					</TabNavigator.Item>

					<TabNavigator.Item
						selected={selectedTab === 'dashboard'}
						title="Dashboard"
						renderIcon={() => this.renderIcon(require('./images/dashboard.png'))}
						onPress={() => this.handleNavigate('dashboard')}>
						<Dashboard/>
					</TabNavigator.Item>

					<TabNavigator.Item
						selected={selectedTab === 'vocabulary'}
						title="Vocabulary"
						renderIcon={() => this.renderIcon(require('./images/vocabulary.png'))}
						onPress={() => this.handleNavigate('vocabulary')}>
						<Vocabulary/>
					</TabNavigator.Item>
				</TabNavigator>
			</SafeAreaView>
		);
	}
}

const Styles = StyleSheet.create({
	mainPage: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	icon: {
		height: 25,
		width: 25,
	}
});


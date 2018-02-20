import React from 'react';
import { AppState, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import NotificationServices from './notificationServices';

import Home from './home';
import Dashboard from './dashboard';
import Vocabulary from './vocabulary';

export default class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home',
		};
		this.notificationQueues = [];
		this.handleAppStateChange = this.handleAppStateChange.bind(this);
	}

	componentDidMount() {
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	}

	handleAppStateChange(appState) {
		if (appState === 'background') {
			NotificationServices.pushNotification();
		} else if (appState === 'active') {
			NotificationServices.clearNotification();
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
			<TabNavigator>
				<TabNavigator.Item
					selected={selectedTab === 'home'}
					title="Home"
					renderIcon={() => this.renderIcon(require('./images/courses.png'))}
					onPress={() => this.handleNavigate('home')}>
					<Home />
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
		);
	}
}

const Styles = StyleSheet.create({
	icon: {
		height: 25,
		width: 25,
	}
});


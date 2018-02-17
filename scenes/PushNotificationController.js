import React from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushNotificationController extends React.PureComponent {
	componentDidMount(){
		PushNotification.configure({
			onNotification: (notification) => {
				console.log( 'NOTIFICATION:', notification );
			},
		});
	}

	render(){
		return null;
	}
}

import React from 'react';
import { FlatList, Text, TouchableOpacity, Image, TouchableHighlight, StyleSheet } from 'react-native';

import FBDatabase from '../fireBaseServices';
import NotificationServices from '../notificationServices';

import { COLORS, NOTIFICATION_TYPE } from '../constants';
import Indicator from '../components/indicator';

export default class Courses extends React.PureComponent {
	static navigationOptions = {
    title: 'Courses',
    headerStyle: {
      backgroundColor: COLORS.red,
    },
    headerTintColor: COLORS.white,
  };

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: [],
		};

		this.coursesRef = FBDatabase.ref('courses');
	}

	componentDidMount() {
		this.listenCourses(this.coursesRef);
	}

	listenCourses(coursesRef) {
		coursesRef.on('value', (snap) => {
			const items = [];
			snap.forEach((child) => {
				items.push({ key: child.key, ...child.val() });
			});
			this.setState({ dataSource: items, isLoading: false });

		}, error => {
			console.log('error', error.code);
		});
	}

	goToDetail(course) {
    this.props.navigation.navigate('CourseDetail', { course });
	}

  register(e, item) {
		e.preventDefault();
		const messageInfo = {
			message: `You have just registered ${item.name} successfully.`,
			startTime: item.notificationTime,
		};
    NotificationServices.add(NOTIFICATION_TYPE.LOCAL_NOTIFICATION_SCHEDULE, messageInfo);
	}

	renderItem(item) {
		return (
			<TouchableOpacity
				style={Styles.courseItem}
				onPress={() => { this.goToDetail(item) }}
			>
				<Text>{item.name}</Text>
				<TouchableHighlight
					style={Styles.touchImage}
					underlayColor={COLORS.lightGray}
					onPress={event => this.register(event, item)}
				>
					<Image source={require('../images/notification.png')} style={Styles.image}/>
				</TouchableHighlight>
			</TouchableOpacity>
		);
	}

	render() {
		const { isLoading, dataSource } = this.state;

		if (isLoading) {
			return <Indicator />;
		}

		return (
			<FlatList
				data={dataSource}
				renderItem={({ item }) => this.renderItem(item)}
				style={Styles.mainPage}
			/>
		);
	}
}

const Styles = StyleSheet.create({
	mainPage: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	courseItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
		borderColor: COLORS.lightGray,
		borderBottomWidth: 1,
	},
  touchImage: {
		width: 44,
		height: 44,
		alignItems: 'center',
    justifyContent: 'center',
	},
	image: {
		width: 24,
		height: 24,
	}
});


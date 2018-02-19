import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import FBDatabase from '../fireBaseServices';

import { COLORS } from '../constants';
import Indicator from '../components/indicator';

export default class Home extends React.PureComponent {
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

	renderHeader() {
		return (
			<Text style={Styles.header}>Available Courses</Text>
		);
	}

	renderItem(item) {
		return (
			<View style={Styles.courseItem}>
				<Text>{item.name}</Text>
			</View>
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
				ListHeaderComponent={this.renderHeader()}
				style={Styles.mainPage}
			/>
		);
	}
}

const Styles = StyleSheet.create({
	mainPage: {
		padding: 20,
	},
	header: {
		color: COLORS.red,
		fontSize: 20,
	},
	courseItem: {
		paddingTop: 20,
		paddingBottom: 20,
		borderColor: COLORS.lightGray,
		borderBottomWidth: 1,
	},
});


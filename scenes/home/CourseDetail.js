import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { COLORS } from '../constants';

export default class CourseDetail extends React.PureComponent {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: {
      backgroundColor: COLORS.red,
    },
    headerTintColor: COLORS.white,
  };

  handleRegister() {
  	// TODO
	};

	render() {
    const { params: { course } }  = this.props.navigation.state;
		return (
			<View style={Styles.mainPage}>
				<View style={Styles.detail}>
					<Image source={require('../images/gayle.png')} style={Styles.image}></Image>
					<View>
						<Text>Class: {course.name}</Text>
						<Text>Teacher: {course.teacher}</Text>
						<Text>Time: {course.time}</Text>
					</View>
				</View>

				<View style={Styles.register}>
					<Button
						onPress={this.handleRegister}
						title="Register"
						color={COLORS.white}
					/>
				</View>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	mainPage: {
		flex: 1,
		padding: 20,
		backgroundColor: COLORS.white,
	},
	detail: {
		flexDirection: 'row',
	},
	image: {
		height: 60,
		width: 60,
		marginRight: 20,
	},
  register: {
		marginTop: 20,
		borderRadius: 4,
    backgroundColor: COLORS.red,
  }
});

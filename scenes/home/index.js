import { StackNavigator } from 'react-navigation';

import Courses from './Courses';
import CourseDetail from './CourseDetail';

export default StackNavigator(
	{
		Courses: {
			screen: Courses,
		},
		CourseDetail: {
			screen: CourseDetail,
		}
	},
	{
		initialRouteName: 'Courses',
	}
);

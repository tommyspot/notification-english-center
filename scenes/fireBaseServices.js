import * as firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyBmVqDNQf_ABkjNT0jvtgkxkhrneCRjbK4',
	authDomain: 'notificationenglishcenter.firebaseapp.com',
	databaseURL: 'https://notificationenglishcenter.firebaseio.com',
	projectId: 'notificationenglishcenter',
	storageBucket: 'notificationenglishcenter.appspot.com',
	messagingSenderId: '1023989585866'
};
firebase.initializeApp(config);
const FBDatabase = firebase.database();

export default FBDatabase;

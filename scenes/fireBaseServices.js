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

/**
 * FireBase Authorization
 * signInWithEmailAndPassword: email, password => in CONSOLE APP (Authentication tab)
 * onAuthStateChanged
 */

const authFireBase = () => {
	const user = {
		email: 'huynhquocthao@gmail.com',
		password: '9502121',
	};

	firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(error => {
		// Handle Errors here.
		console.log('LOGIN FAIL', error);
	});

	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			// User is signed in.
			console.log('SIGNED IN', user.email);
			// const displayName = user.displayName;
			// const email = user.email;
			// const emailVerified = user.emailVerified;
			// const photoURL = user.photoURL;
			// const isAnonymous = user.isAnonymous;
			// const uid = user.uid;
			// const providerData = user.providerData;
		} else {
			// User is signed out.
			console.log('SIGNED OUT');
		}
	});
};

authFireBase();

export default FBDatabase;


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAJJtS3i0RuXqbfmO-sxPaAwzxKpIbJUrA',
	authDomain: 'net-ninja-marioplan-ebeb5.firebaseapp.com',
	databaseURL: 'https://net-ninja-marioplan-ebeb5.firebaseio.com',
	projectId: 'net-ninja-marioplan-ebeb5',
	storageBucket: '',
	messagingSenderId: '806720838851',
	appId: '1:806720838851:web:bc4c0d62ba5aa61e'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

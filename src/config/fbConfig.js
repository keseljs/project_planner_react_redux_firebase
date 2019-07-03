import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCNKVAJORTAavJ4qH2Zr24hAzZTGb8hrfQ",
    authDomain: "project-planner-636fd.firebaseapp.com",
    databaseURL: "https://project-planner-636fd.firebaseio.com",
    projectId: "project-planner-636fd",
    storageBucket: "",
    messagingSenderId: "376454412577",
    appId: "1:376454412577:web:46171a09377c838e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

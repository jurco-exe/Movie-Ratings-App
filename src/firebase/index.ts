// Import the functions you need from the SDKs you need
import { initializeApp } from '../../node_modules/firebase/app';
import { getAnalytics } from '../../node_modules/firebase/analytics';
import { getFirestore } from '../../node_modules/firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB5YOJDG6Avy3rnV71xfejEPWzOoKwNi1o',
	authDomain: 'ateckari-maturita.firebaseapp.com',
	projectId: 'ateckari-maturita',
	storageBucket: 'ateckari-maturita.appspot.com',
	messagingSenderId: '737984501500',
	appId: '1:737984501500:web:44c88401c7842fcda76979',
	measurementId: 'G-PQ7SL0PFDD'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

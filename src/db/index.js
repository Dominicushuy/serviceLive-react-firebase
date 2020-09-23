import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyA9QCxjAD9RpFQoIS3GG7nTz6cg7_RmA6c',
    authDomain: 'servicario-cf5b4.firebaseapp.com',
    databaseURL: 'https://servicario-cf5b4.firebaseio.com',
    projectId: 'servicario-cf5b4',
    storageBucket: 'servicario-cf5b4.appspot.com',
    messagingSenderId: '198969795319',
    appId: '1:198969795319:web:2b6a778986f50e5adc29f2',
    measurementId: 'G-SVVSN5FXR0',
  })
  .firestore();

export default db;

const { Timestamp } = firebase.firestore;
export { Timestamp };

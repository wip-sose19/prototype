import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export function loadDB() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyAbZRTIoJpV2XpSjFc8-zOvnYXSgrq9W1g',
    authDomain: 'wirtschaftsinformatik-2c330.firebaseapp.com',
    databaseURL: 'https://wirtschaftsinformatik-2c330.firebaseio.com',
    projectId: 'wirtschaftsinformatik-2c330',
    storageBucket: 'wirtschaftsinformatik-2c330.appspot.com',
    messagingSenderId: '647353274023',
    appId: '1:647353274023:web:798b69be47ae37d5',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase;
}

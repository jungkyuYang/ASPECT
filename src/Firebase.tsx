// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADihy-bOIsvog0Rdu-VGhg_gFfXW_LWQg',
  authDomain: 'aspect-142a4.firebaseapp.com',
  projectId: 'aspect-142a4',
  storageBucket: 'aspect-142a4.appspot.com',
  messagingSenderId: '826722152027',
  appId: '1:826722152027:web:876db2570b08e999cbd97e',
  measurementId: 'G-VMP41WGVX2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

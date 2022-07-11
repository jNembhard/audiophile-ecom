// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
};

let analytics;
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const auth = getAuth(firebaseApp);
const db = getFirestore();
if (firebaseApp.name && typeof window !== "undefined") {
  analytics = getAnalytics(firebaseApp);
}
// const analytics = getAnalytics(firebaseApp);

// const firebaseConfig = JSON.parse(
//     process?.env?.FIREBASE_CONFIG ?? '{}',
// );

// let analytics;
// let firestore;

// if (firebaseConfig?.projectId) {
//   // Initialize Firebase
//   const firebaseApp = initializeApp(firebaseConfig);

//   if (firebaseApp.name && typeof window !== "undefined") {
//     analytics = getAnalytics(firebaseApp);
//   }

//   // Access Firebase services using shorthand notation
//   firestore = getFirestore();
// }
// const auth = getAuth();

export { auth, db, analytics };

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "<INSERT-YOUR-API_KEY>",
  authDomain: "udemy-vue-projects.firebaseapp.com",
  databaseURL: "https://udemy-vue-projects.firebaseio.com",
  projectId: "udemy-vue-projects",
  storageBucket: "udemy-vue-projects.appspot.com",
  messagingSenderId: "25092947019",
  appId: "1:25092947019:web:1cd42f080ff63e1c63e1ce"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }

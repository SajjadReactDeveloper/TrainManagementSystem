import { firebase } from '@firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyC_wZz4ExsspiNwd23CSzYqCdm05y6MdXo",
  authDomain: "trainmanagementsystemmad.firebaseapp.com",
  projectId: "trainmanagementsystemmad",
  storageBucket: "trainmanagementsystemmad.appspot.com",
  messagingSenderId: "171837436484",
  appId: "1:171837436484:web:82e8fe733ad6e6e1380211"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
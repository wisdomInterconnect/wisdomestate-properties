import firebase from "firebase";
//import firestore from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAFXCc5wgliSNTGJxi9QRWu9CyDuijQxAg",
  authDomain: "wisdom-interconnect.firebaseapp.com",
  databaseURL: "https://wisdom-interconnect.firebaseio.com",
  projectId: "wisdom-interconnect",
  storageBucket: "wisdom-interconnect.appspot.com",
  messagingSenderId: "463139556463",
  appId: "1:463139556463:web:fa0a32af5f7bf51625519a",
  measurementId: "G-2RE6WLDEKP",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots:true})
firebase.analytics();
//export firestore database
export default firebaseApp.firestore()

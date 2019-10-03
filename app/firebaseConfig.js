import firebase from 'firebase'; 

const config = { 
  apiKey: "AIzaSyBiq_yBSHeOCRSUi7UMq3VAqQVUwID0OiI",
  authDomain: "shopr-5e75c.firebaseapp.com",
  databaseURL: "https://shopr-5e75c.firebaseio.com",
  projectId: "shopr-5e75c",
  storageBucket: "gs://shopr-5e75c.appspot.com/",
  messagingSenderId: "549515251185",
  appId: "1:549515251185:web:2d32ef6fcef6188772c850"
}; 

/* 
  apiKey: 'AIzaSyCVEnGzjO3TZKkFar9tawp9PpdvKaDWc0w', 
  authDomain: 'experiment-e22fb.firebaseapp.com', 
  databaseURL: 'https://experiment-e22fb.firebaseio.com', 
  projectId: 'experiment-e22fb', 
  storageBucket: 'experiment-e22fb.appspot.com', 
  messagingSenderId: '205631464972' 

*/

firebase.initializeApp(config); 

export default firebase;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6kqhTgxhK5ijnVLrEQxvp1u2WSHz0tPI",
    authDomain: "portifolio-kristine.firebaseapp.com",
    projectId: "portifolio-kristine",
    storageBucket: "portifolio-kristine.appspot.com",
    messagingSenderId: "266915101391",
    appId: "1:266915101391:web:be03c40099065fa9a595ba"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const app = flamelink({
	firebaseApp,
	dbType: 'cf'
});
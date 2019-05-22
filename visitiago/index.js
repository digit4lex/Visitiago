const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyA3_t2BGdxKugPAbVveRwj05dJwJfBgcmQ",
    authDomain: "visitiago.firebaseapp.com",
    projectId: "visitiago",
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  db.collection("users").add({
    first: "Ada",
    middle: "Mathison",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
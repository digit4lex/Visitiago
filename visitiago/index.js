
import {initRouter} from './route.js'

const init =()=>{

    const config ={ 
            apiKey: "AIzaSyA3_t2BGdxKugPAbVveRwj05dJwJfBgcmQ",
            authDomain: "visitiago.firebaseapp.com",
            databaseURL: "https://visitiago.firebaseio.com",
            projectId: "visitiago",
            storageBucket: "visitiago.appspot.com",
            messagingSenderId: "703091399065",
          };
          // Initialize Firebase
          firebase.initializeApp(config);
            initRouter();
   
    }
    window.addEventListener('load',init);

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



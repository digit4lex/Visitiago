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


import {initRouter} from './route.js'

const init =()=>{
    initRouter();
}

window.addEventListener('load',init);
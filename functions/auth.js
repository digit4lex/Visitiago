/* 
import {checkUser} from '../js/validation.js'

//Función para registro de nuevo usuario
export const user = (name, lastname, rut) => {

    if (checkUser(name, lastname, rut)){
         alert('Creación de usuario exitosa')
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
            let db = firebase.firestore();
            db.collection("users").add({
             first: name,
             last: lastname,
             email: email,
             password: password,

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        window.location.hash='#/wall';
        })

        
        .catch(function(error) {
            // Handle Errors here.
            let errorCode =alert (error.code);
            let errorMessage = alert(error.message);
            // ...
        }); 
    }
   
} 



//Función que ingresa a firestore para obtener nombre y apellido del usuario registrado
export const getUserData=(email)=>{
	let db = firebase.firestore();
	db.collection('users').where('email', '==', email).get()    
	.then((querySnapshot)=> {
	querySnapshot.forEach((doc)=> {
			firebase.auth().currentUser.name = doc.data().first + " " +doc.data().last;
            console.log('Aquí está pasando por el getUserData');
            //console.log(firebase.auth().currentUser.name);
	});
})
 .catch(function(error) {
	console.log("Error getting documents: ", error);
});

} 
   

    

//Función para confirmar si hay usuario logueado
export const observer =()=>{
    firebase.auth().onAuthStateChanged(function(user) { 
        if (user) {    
        console.log('inicio de sesión exitosa')
    
          // User is signed in.
     let displayName=user.displayName   
      if(displayName == undefined){
          getUserData(user.email);
      }


     let photoURL= user.photoURL;
     if(user.photoURL == undefined){
        photoURL= 'http://img.fenixzone.net/i/zwc5Wfh.png';
      } 
      if (document.getElementById('avatar')){
        document.getElementById('avatar').src = photoURL;
      }      

          
        } else {
         console.log('no existe usuario activo')
         window.location.hash="";
        }
      });
} */
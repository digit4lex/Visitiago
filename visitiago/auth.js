// Función para crear cuenta con correo y contraseña y que también guarde el nombre y apellido
export const createAccount = (fullName, rut) => {
    let user = firebase.auth().currentUser;
   
       firebase.auth().createUserWithEmailAndPassword(email, rut).catch(function (error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           alert(errorMessage);
           // ...
       });
    }
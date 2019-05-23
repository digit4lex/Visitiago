export const templateUser = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `<div class='' id="green-columns">
                </div>
                <div id="logo" >
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input type="text" id="name" placeholder="Nombre y Apellido" name="">
            </div>
                <i class="fas fa-key"></i>
               <input type="number" id="rut" placeholder="RUT" name="">

            <div class="photo">
                <progress value ="0" max= "100" id="uploader">0%</progress>
                <input type="file" value="upload" id="fileButton" />
            </div>

            </div>
            <div >
                <button id="register" class="sign-in-style">Registrar</button>
            </div>`;

    //pasar cel contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#register');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

        let rut = containerCreate.querySelector('#rut').value;
        let fullName = containerCreate.querySelector('#full-name').value;
        let resultFullName = verifyFullName(fullName);

        // Obtener Elementos
let uploader = document.querySelector('#uploader');
let fileButton = document.querySelector('#fileButton');
// Vigilar selección archivo
fileButton.addEventListener('change', function(e) {
  //Obtener archivo
  let file = e.target.files[0];
  // Crear un storage ref
  let storageRef = firebase.storage().ref('mis_fotos/' + file.name);
  // Subir archivo
  let task = storageRef.put(file);
  // Actualizar barra progreso
  task.on('state_changed',
    function progress(snapshot) {
      let percentage = (snapshot.bytesTransferred /
        snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    
    function error(err) {
    },
    function complete() {
    }
    );
});

        
        if (resultFullName === false) {
            alert('Coloca tu nombre y apellido')
        } else {
            registerUser(rut, fullName)
        }
    })
    return containerCreate;
}
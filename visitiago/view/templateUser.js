export const templateUser = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `
                <img id="logo" src="../visitiago/assets/logo.png">
            
              


            <div class="photo">
            <p class="uploadPhoto">Ingrese una foto (opcional)</p>
            <input type="file" accept="image/*" value="upload" id="fileButton" capture="camera">
            </div>
            
            <div class="cfield">
            <form id="add-visitor-form">
                <p class="fullname">Nombre y Apellido del visitante</p>
                <input type="text" id="fullname" name="name">
            
                <p class="rut">RUT o pasaporte del visitante</p>
               <input type="text" id="rut" name="rut">

               <p class="selectCoworker">¿A quién viene a visitar?</p>
               <select id="my-list" name="option">
               </select>

               <br>
               <button id="register" class="sign-in-style">Registrar</button>
                </form>
                </div>
            <div>
                
            </div>
            <br>
            <br>

            <a id="adminText" href="#/admin">Ingresar como administrador</a>
            `;

    //pasar cel contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#register');
    const coworkersList = containerCreate.querySelector('#my-list');
    const form = containerCreate.querySelector('#add-visitor-form')

    function renderList(doc) {
        let option = document.createElement('option');
        let fullname = document.createElement('span');
       /*  let rut = document.createElement('span'); */

        option.setAttribute('data-id', doc.id)
        fullname.textContent = doc.data().fullname;
        /* rut.textContent = doc.data().rut; */
        
        option.appendChild(fullname);
        /* option.appendChild(rut); */

        coworkersList.appendChild(option)
    }
    //obteniendo la  data de los coworkers
    db.collection('coworkers').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderList(doc);
        })
      })
    //salvando la data de los visitantes
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.name.value != '' && form.rut.value != '') {
            db.collection('visitors').add({
                fullname: form.name.value,
                rut: form.rut.value,
                visiting: form.option.value
            })
        } else {
            alert('no puedes dejar campos vacios')
        }
        
    })



btn.addEventListener('click', () => {
        let fileButton = document.querySelector('#fileButton');
    
       

        // Vigilar selección archivo
        fileButton.addEventListener('change', function(e) {
        //Obtener archivo
        let file = this.files[0];
        // Crear un storage ref
        let storageRef = firebase.storage().ref('mis_fotos/' + file.name);
        // Subir archivo
        let task = storageRef.put(file);
});

    })
    return containerCreate;
}

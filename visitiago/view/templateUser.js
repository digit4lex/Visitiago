import {templateAdmin} from './templateAdmin.js'

export const templateUser = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `<div class='' id="green-columns">
                </div>
                <div id="logo">
                </div>
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input type="text" id="name" placeholder="Nombre y Apellido" name="">
            </div>

            <div>
                <i class="fas fa-key"></i>
               <input type="number" id="rut" placeholder="RUT" name="">
            </div>

            <div>
            <select id="myList" onchange="myFunction()">
            </select>
            </div>
            

            <div>
                <button id="register" class="sign-in-style">Registrar</button>
            </div>

            <footer>
            <a href="#/admin">Ingresar como administrador</a>
            </footer>

            `;

    //pasar cel contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#register');
    const btnAdmin = containerCreate.querySelector('#admin')
    const coworkersList = containerCreate.querySelector('#myList');

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

    db.collection('coworkers').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderList(doc);
        })
      })

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

        let rut = containerCreate.querySelector('#rut').value;
        let fullName = containerCreate.querySelector('#full-name').value;
        let resultFullName = verifyFullName(fullName);
        
        if (resultFullName === false) {
            alert('Por favor coloca tu nombre y apellido')
        } else {
            newVisitor(rut, fullName)
        }
    })
    return containerCreate;
}

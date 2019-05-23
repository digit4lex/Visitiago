export const templateUser = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `<div class='' id="green-columns">
                </div>
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input type="text" id="name" placeholder="Nombre y apellido" name="">
                <input type="text" id="lastname" placeholder="Nombre y apellido" name="">
            </div>

                <i class="fas fa-key"></i>
               <input type="number" id="rut" placeholder="rut" name="">
            </div>
            <div >
                <button id="register" class="sign-in-style">registra visitante</button>
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
        
        if (resultFullName === false) {
            alert('Coloca tu nombre y apellido')
        } else {
            registerUser(rut, fullName)
        }
    })
    return containerCreate;
}
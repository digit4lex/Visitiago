export const templateAdmin = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `<div class='' id="green-columns">
                </div>

                <div>
                <a href="#/user" id="arrow" <i class="fas fa-arrow-left">Volver</i></a>
                </div>

            <div class="cfield">
                <ul id="visitorsList"></ul>
            </div>
               
            <div>
                <button id="stats" class="sign-in-style">Ver estadísticas</button>
            </div>
               `;

    //pasar el contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#register');

   

    if (prompt('Ingresa la contraseña') != 1234) {
        alert('Contraseña inválida')
    } else {
        return containerCreate;
    } 
}


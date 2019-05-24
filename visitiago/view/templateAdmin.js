
export const templateAdmin = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `
                <a href="#/user">
                <img id"go-back"  src="../visitiago/assets/arrow-left.svg" width="60px"> Volver a visitante</img>
                </a>
                <br>
                <br>
                <br>

            <div class="cfield">
            <p id="visitors-list-title">Lista de visitantes:</p>
                <ul class="list-group" id="visitors-list">
                </ul>
            </div>
            <br>
               
            <div>
                <button id="stats" class="sign-in-style">Ver estadísticas</button>
            </div>
               `;

    //pasar el contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const stats = containerCreate.querySelector('#stats');
    const list = containerCreate.querySelector('#visitors-list')


    function renderList(doc) {
        let li = document.createElement('p');
        let fullname = document.createElement('div');
        let rut = document.createElement('div');
        let visiting = document.createElement('div')
        let pic = document.createElement('div')

        li.setAttribute('data-id', doc.id)
        fullname.textContent = 'Visitante: ' + doc.data().fullname;
        rut.textContent = 'RUT:  ' + doc.data().rut;
        visiting.textContent = 'Visitando a: ' + doc.data().visiting;
        pic = 'Imagen: ' + doc.data().photo;

        li.appendChild(fullname);
        li.appendChild(rut);
        li.append(visiting)
        li.append(pic)

        list.appendChild(li)
    }
    //obteniendo la  data de los coworkers
    db.collection('visitors').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderList(doc);
        })

    })

    stats.addEventListener('click', () => {
        alert('Disculpe, todavía no está disponible esta sección')
    })


    if (prompt('Ingresa la contraseña') != 1234) {
        alert('Contraseña inválida')
        location = "";
    } else {
        return containerCreate;
    }
}


export const templateAdmin = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `

                <a href="#/user">Volver a visitante</a>
                <br>
                <br>

            <div class="cfield">
            <p id="visitors-list-title">Lista de visitantes:</p>
                <ul class="list-group" id="visitors-list">
                </ul>
            </div>
            <br><br>
               
            <div>
                <button id="stats" data-toggle="modal" data-target="#exampleModal" class="sign-in-style">Ver estadísticas</button>
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
        let rut = document.createElement('span');

        li.setAttribute('data-id', doc.id)
        fullname.textContent = doc.data().fullname;
        rut.textContent = doc.data().rut;

        li.appendChild(fullname);
        li.appendChild(rut);

        list.appendChild(li)
    }
    //obteniendo la  data de los coworkers
    db.collection('visitors').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderList(doc);
        })

    })

    stats.addEventListener('click', () => {
        `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
    })


    if (prompt('Ingresa la contraseña') != 1234) {
        alert('Contraseña inválida')
    } else {
        return containerCreate;
    }
}


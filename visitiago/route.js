import {templateUser} from './view/templateUser.js';
import {templateAdmin} from './view/templateAdmin.js';

const changeRouter = (hash) => {
    if (hash === '#/user') {
      return showTemplate(hash);
    }
      if(hash==='#/admin'){
          return showTemplate(hash);
      }
  
    }
  
  
  //Imprimirá el template en el html
  const showTemplate =(hash)=>{
      const router = hash.substring(2);
      let containerRoot=document.getElementById('root');
      containerRoot.innerHTML="";
      //hacemos el match del hash utilizado y el template que quiero mostrar
  
      switch(router){
          case 'user':
          containerRoot.appendChild(templateUser());
          break;
          case 'admin':
          containerRoot.appendChild(templateAdmin());
          break;
          default:
          containerRoot.innerHTML= `<p>Página no encontrada</p>`
      }
     
  }
  
  // inicializar las rutas para que se ejecute changeRouter() y en su defecto showTemplate()
  
  export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));
    let containerRoot=document.getElementById('root');
    containerRoot.appendChild(templateUser());
  }
  
    // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
    if ('onhashchange' in window) {
      window.onhashchange = () => {
        changeRouter(window.location.hash);
      }
    }
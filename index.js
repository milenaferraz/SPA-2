import routes from './routes.js'
import firebase from 'firebase/auth';


const main = document.querySelector("#root");

const init = () => window.addEventListener("hashchange", renderPage);
    
const renderPage = () => {
    main.innerHTML = "";
    const pages = validateHash(window.location.hash);
    main.appendChild(routes[pages]);
}

const validateHash = (hash) => hash === "" ? "home" : hash.replace("#", "");

window.addEventListener("load", () => {
    renderPage();
    init();
    
})





    let btnLogin = document.getElementById("button");
    btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("input").value;
    const password = document.getElementById("senha").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=> {
        console.log(email)
        console.log(password)
    }) 
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
   

})

    
const nombre = document.getElementById("bloque1");
const msgValNombre = document.getElementById("msgValNombre");

const aellido = document.getElementById("bloque2");
const msgValApellido = document.getElementById("msgValApellido");

const email = document.getElementById("bloque3");
const msgValEmail = document.getElementById("msgValEmail");

const tel = document.getElementById("bloque4");
const msgValTel = document.getElementById("msgValTel");


const btnEnviar = document.getElementById("btnEnviar");


$(function(){

    // Nombre
    let vnombre = nombre.value;
    msgValNombre.innerText ="";
    let RegExpNom = /^[A-Z]+([\s]?[A-Za-z])*$/;

     // Apellido
     let vapellido = nombre.value;
     msgValNombre.innerText ="";
     let RegExpApellido = /^[A-Z]+([\s]?[A-Za-z])*$/;
    
    // Email
    
    let vemail = email.value;
    msgValEmail.innerText ="";
    let RegExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Telefono
    
    let vtel = tel.value;
    msgValTel.innerText ="";
    let RegExpTel = /^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    
    
    if(vnombre=="" || !RegExpNom.test(vnombre)){
    msgValNombre.innerText = "Complete su nombre";
    }
    if(vapellido=="" || !RegExpApellido.test(vapellido)){
        msgValApellido.innerText = "Complete su apellido";
    }
    if(!RegExpTel.test(vtel)){
    msgValTel.innerText = "Ingrese codigo de pais (01)###-###-###";
    }
    if(!RegExpEmail.test(vemail)){
    msgValEmail.innerText = "Email invalido";
    }
    
    
    $("button").click(function(){
        alert("Bienvenido, completaste el formulario");
    });

    })
    btnEnviar.onclick = () => Validacionformulario();

//---------- javascript para la GALERIA ----------

// Efecto para Blackwork 
const blackword1 = document.querySelector(".blackword1")
const blackword2 = document.querySelectorAll(".blackword2")


blackword2.forEach(blackword2 => {
    blackword2.addEventListener('click', function(){
        const activo = document.querySelector(".activo")
        activo.classList.remove('activo')
        blackword2.classList.add('activo')
        blackword1.src = blackword2.src
    })
})

// Efecto para Japones 
const japones1 = document.querySelector(".japones1")
const japones2 = document.querySelectorAll(".japones2")


japones2.forEach(japones2 => {
    japones2.addEventListener('click', function(){
        const activo = document.querySelector(".activo")
        activo.classList.remove('activo')
        japones2.classList.add('activo')
        japones1.src = japones2.src
    })
})

// Efecto para  Cartoon 
const cartoon1 = document.querySelector(".cartoon1")
const cartoon2 = document.querySelectorAll(".cartoon2")


cartoon2.forEach(cartoon2 => {
    cartoon2.addEventListener('click', function(){
        const activo = document.querySelector(".activo")
        activo.classList.remove('activo')
        cartoon2.classList.add('activo')
        cartoon1.src = cartoon2.src
    })
})

// Efecto para  Realismo 
const realismo1 = document.querySelector(".realismo1")
const realismo2 = document.querySelectorAll(".realismo2")


realismo2.forEach(realismo2 => {
    realismo2.addEventListener('click', function(){
        const activo = document.querySelector(".activo")
        activo.classList.remove('activo')
        realismo2.classList.add('activo')
        realismo1.src = realismo2.src
    })
})

// Efecto para  Tradicional 
const tradicional1 = document.querySelector(".tradicional1")
const tradicional2 = document.querySelectorAll(".tradicional2")


tradicional2.forEach(tradicional2 => {
    tradicional2.addEventListener('click', function(){
        const activo = document.querySelector(".activo")
        activo.classList.remove('activo')
        tradicional2.classList.add('activo')
        tradicional1.src = tradicional2.src
    })
})
//---------- javascript para FORMULARIO----------

//---------- javascript para VALIDACION DE DATOS----------

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email")

const valida = {
    nombre:false,
    apellido:false,
    telefono:false,
    email:false
}

//enviar formulario

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    let errorV = false;

    for(const property in valida){
        if(valida[property] == false)
            errorV = true;
    }

    if(!errorV){
        formulario.submit();
    }
})


//validar NOMBRE

nombre.addEventListener("blur",()=>{    
    let nombre_re = /^[a-zA-Z ]{2,15}$/;

    if (nombre.value == "" || nombre.value == null) {
        
        setErrorFor(nombre,"No puede dejar este apartado en blanco.");
        valida.nombre = false;
    }else{
        if (!nombre_re.exec(nombre.value)){
        setErrorFor(nombre,"El nombre solo debe estar formado por letras y un maximo de 15 caracteres.");
        valida.nombre = false;
        }else{
            setSuccessFor(nombre)
            valida.nombre = true;
        }
    }
})

//validar APELLIDO

apellido.addEventListener("blur",()=>{
    let apellido_re = /^[a-zA-Z ]{2,30}$/;

    if (apellido.value == "" || apellido.value == null) {
        
        setErrorFor(apellido,"No puede dejar este apartado en blanco.");
        valida.apellido = false;
    }else{
        if (!apellido_re.exec(apellido.value)){
        setErrorFor(apellido,"El apellido solo debe estar formado por letras y un maximo de 15 caracteres.");
        valida.apellido = false;
        }else{
            setSuccessFor(apellido)
            valida.apellido = true;
        }
    }

})

//validar TELEFONO

telefono.addEventListener("blur",()=>{
    let telefono_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

    if (telefono.value == "" || telefono.value == null) {
        
        setErrorFor(telefono,"No puede dejar este apartado en blanco.");
        valida.telefono = false;
    }else{
        if (!telefono_re.exec(telefono.value)){
        setErrorFor(telefono,"El número de telefono debe tener 9 numeros.");
        valida.telefono = false;
        }else{
            setSuccessFor(telefono)
            valida.telefono = true;
        }
    }

})

//validar EMAIL

email.addEventListener("blur",()=>{
    let email_re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (email.value == "" || email.value == null) {
        
        setErrorFor(email,"No puede dejar este apartado en blanco.");
        valida.email = false;
    }else{
        if (!email_re.exec(email.value)){
        setErrorFor(email,"No ingresó un email valido.");
        valida.nombre = false;
        }else{
            setSuccessFor(email)
            valida.email = true;
        }
    }


})
    
//mensaje de ERROR

function setErrorFor(input,mensaje){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = mensaje;
    

}

//si todo esta CORRECTO

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}

//---------- javascript para cargar JSON en pagina de inicio (INDEX) ----------
 
function CargarEva() {
    $.ajax({
        url: "../json/info.json",
        type: 'GET',
        success: function(datos){
            
            var cadena = ''; 
            for (i=0;i<datos.evapincelli.length;i++) {
                cadena = cadena + 'Edad: <b>' +
                datos.evapincelli[i].edad + '</b><br>';
                cadena = cadena + 'Estilo: <b>' +
                datos.evapincelli[i].estilo + '</b><br>';
                cadena = cadena + 'Horario: <b>' +
                datos.evapincelli[i].horario + '</b><br>';
            }
            $("#box").html(cadena);
        },
        error : function(xhr, status){
            alert('Disculpe, existio un problema')
            }
    });
}  

function CargarBruno() {
    $.ajax({
        url: "../json/info.json",
        type: 'GET',
        success: function(datos){
            
            var cadena = ''; 
            for (i=0;i<datos.brunodiaz.length;i++) {
                cadena = cadena + 'Edad: <b>' +
                datos.brunodiaz[i].edad + '</b><br>';
                cadena = cadena + 'Estilo: <b>' +
                datos.brunodiaz[i].estilo + '</b><br>';
                cadena = cadena + 'Horario: <b>' +
                datos.brunodiaz[i].horario + '</b><br>';
            }
            $("#box1").html(cadena);
        },
        error : function(xhr, status){
            alert('Disculpe, existio un problema')
            }
    });
}  

function CargarSergio() {
    $.ajax({
        url: "../json/info.json",
        type: 'GET',
        success: function(datos){
            
            var cadena = ''; 
            for (i=0;i<datos.sergiomuñoz.length;i++) {
                cadena = cadena + 'Edad: <b>' +
                datos.sergiomuñoz[i].edad + '</b><br>';
                cadena = cadena + 'Estilo: <b>' +
                datos.sergiomuñoz[i].estilo + '</b><br>';
                cadena = cadena + 'Horario: <b>' +
                datos.sergiomuñoz[i].horario + '</b><br>';
            }
            $("#box2").html(cadena);
        },
        error : function(xhr, status){
            alert('Disculpe, existio un problema')
            }
    });
}  

function CargarLucia() {
    $.ajax({
        url: "../json/info.json",
        type: 'GET',
        success: function(datos){
            
            var cadena = ''; 
            for (i=0;i<datos.luciasappia.length;i++) {
                cadena = cadena + 'Edad: <b>' +
                datos.luciasappia[i].edad + '</b><br>';
                cadena = cadena + 'Estilo: <b>' +
                datos.luciasappia[i].estilo + '</b><br>';
                cadena = cadena + 'Horario: <b>' +
                datos.luciasappia[i].horario + '</b><br>';
            }
            $("#box3").html(cadena);
        },
        error : function(xhr, status){
            alert('Disculpe, existio un problema')
            }
    });
}  

function CargarJesus() {
    $.ajax({
        url: "../json/info.json",
        type: 'GET',
        success: function(datos){
            
            var cadena = ''; 
            for (i=0;i<datos.jesusbrecuri.length;i++) {
                cadena = cadena + 'Edad: <b>' +
                datos.jesusbrecuri[i].edad + '</b><br>';
                cadena = cadena + 'Estilo: <b>' +
                datos.jesusbrecuri[i].estilo + '</b><br>';
                cadena = cadena + 'Horario: <b>' +
                datos.jesusbrecuri[i].horario + '</b><br>';
            }
            $("#box4").html(cadena);
        },
        error : function(xhr, status){
            alert('Disculpe, existio un problema')
            }
    });
}  


//---------- javascript para CALCULO DE PRESUPUESTO ----------

let sumaTotal = 0;

const tamaño = document.querySelector("#tamañoTatuaje");
const sesiones = document.querySelector("#sesion");
const opciones = document.querySelectorAll("#extras>input");
const total = document.querySelector("#total");

let suma = ()=>{

    sumaTotal = parseInt(tamaño.value);

    switch (sesiones.value) {
        case "1":
            sumaTotal += 25;
            break;
        case "2":
            sumaTotal += 50;
            break;
        case "3":
            sumaTotal += 70;
            break;
        case "4":
            sumaTotal += 100;
            break;    
    }
    opciones.forEach(element => {
        if(element.checked){
            sumaTotal += parseInt(element.value);
        }
    });


    total.value = sumaTotal;
}

opciones.forEach(element => {
    element.addEventListener("change",suma,false);
});
tamaño.addEventListener("change",suma,false);
sesiones.addEventListener("change",suma,false);





































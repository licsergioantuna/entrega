let confirmar = confirm("Nos gustaria pedirte algunos datos, para poder contactarte mas adelante...");

console.log(confirmar);

if(confirmar){
    let miNombre = prompt ("Cual es tu nombre?");
    console.log(miNombre);

    if(miNombre){
            alert("Bienvenido " + miNombre);
            }

}





else{
    alert("gracias igualmente...");
}




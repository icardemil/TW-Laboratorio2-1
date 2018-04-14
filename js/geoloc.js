function geoLoct() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarPosicion);
    }
    else{
        alert("La plataforma no soporta la función.");
    }
}
function mostrarPosicion(posicion) {
    document.getElementById("latitudActual").innerHTML = posicion.coords.latitude;
    document.getElementById("longitudActual").innerHTML = posicion.coords.longitude;
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("latAntigua",posicion.coords.latitude);
        localStorage.setItem("lonAntigua",posicion.coords.longitude);
    }
}
function cargarDatos(){
    geoLoct();
    document.getElementById("latitudAntigua").innerHTML = localStorage.getItem("latAntigua");
    document.getElementById("longitudAntigua").innerHTML = localStorage.getItem("lonAntigua");
}
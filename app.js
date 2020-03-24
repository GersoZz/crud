var aux;
var datos= new Array();
datos =['Diego','Gerson','Atomsk','Alex','Ale','Mechon','Bando','Renzo'];

function mostrarDatos(){
    lista.innerHTML='';
    for(var i=0;i<datos.length;i++){
        lista.innerHTML +=`${datos[i]} <button onclick="actualizar(${i})">Actualizar</button> <button onclick="eliminar(${i})">Eliminar</button><br>`;     
    }

}

function aniadir(){
    datos.push(inputAniadir.value);
    inputAniadir.value="";
    inputAniadir.placeholder="dato aniadido";
    mostrarDatos();
}

function actualizar(id){
    inputEditar.value = datos[id];
    aux=id;
}

function editar(){
    datos[aux]=inputEditar.value;
    mostrarDatos();
}

function eliminar(id){
    console.log("dato borrado : ",datos[id]);
    datos.splice(id,1);
    mostrarDatos();
}


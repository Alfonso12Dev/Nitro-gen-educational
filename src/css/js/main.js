(function(){
var oldLog = console.log;

console.log = function (message) {
document.getElementById('a').value += message
oldLog.apply(arguments);
  };
})();

//<-Definimos la función para descargar archivos->
function download(filename, text) {

//<-Definimos el elemento a editar (a)->  
let element = document.createElement('a');

//<-Hacemos las configuraciones debidas para que se pueda descargar->
element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
element.setAttribute('download', filename);

//<-Terminamos de arreglar "el diseño"->
element.style.display = 'none';
document.body.appendChild(element);

//<-Al darse click al elemento, le descargamos el archivo->
element.click();

//<-Removemos del cuerpo el elemento antiguo (el "A" y añadimos otro)->
document.body.removeChild(element);
}

//<-Sí el usuario es de telefono, le ajustamos el textarea->
if(navigator.userAgent.indexOf('Mobile') !== -1) document.getElementById('save').style.display = "none"; document.getElementById('a').style.height = "100px";


//<-Definimos la función en donde generaremos el código de nitro->
function generate() {

//<-Obtenemos la velocidad en la que se creara los códigos de nitro->  
var triesPerSecond = document.getElementById('speed').value

getGiftCode = function () {

//<-Definimos la variable en donde estará el código y la manera de crear el código->  
var code = '', dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
//<-Hacemos un bucle para generar los códigos->
for(let i = 0; i < 16; i++){
code = code + dict.charAt(Math.floor(Math.random() * dict.length));
  }

//<-Imprimimos el código en el textarea->  
console.log(`[🎁] https://discord.gift/${code}\n`);
code += '\n'
    
//<-Añadimos en el elemento b el código->
document.getElementById('b').value += code;
}

//<-Invocamos la función->
getGiftCode();

//<-Definimos la función flecha stop, para detener el proceso de creación de códigos nitro->
let stop = () => clearInterval(gInterval) && clearInterval(interval);

//<-Sí en el elemento stop se detecta un click, paramos el proceso de generación de código->
document.getElementById('stop').addEventListener("click", stop);

//<-Repetimos la creación de códigos->
let gInterval = setInterval(() => { getGiftCode(); }, (1/triesPerSecond) * 1000);

//<-Definimos la función scroll (Para cuando se haga el scroll jaja)->
let scroll = () => document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight;

//<-Creamos un intervalo de tiempo, para mantener el scroll->
let interval = setInterval(scroll, 100);

//<-Sí se detecta click en el elemento "clear", entonces lo detenemos->
document.getElementById('clear').addEventListener("click", stop);
};

//<-Sí en el elemento "generate" se detecta un click, entonces seguimos generando los códigos->
document.getElementById('generate').addEventListener("click", generate);

//<-Sí en el elemento "clear" se detecta un click, entonces seguimos generando los códigos->
document.getElementById('clear').addEventListener("click", clear);

//<-Sí en el elemento "clear" se detecta un click, entonces seguimos generando los códigos->
document.getElementById('save').addEventListener("click", save);

//<-Definimos la función en donde se guardara los códigos->
function save(){

//<-Obtenemos el valor que hay en el elemento b, y lo spliteamos uno por uno->  
let rows = document.getElementById('b').value.split('\n').length -  1;

//<-Utilizamos la función para descargar y rellenamos la info->
download(`${rows} Códigos de nitro UNCHECKED.txt`, 
`Creado por Heather_Dev generator (https://sitesgithub.github.io/nitro/index0.html)\n\n
${document.getElementById('b').value}`)
}


//<-Definimos la función clear->
function clear(){

//<-Utilizamos la función parar->
stop();

//<-En el elemento a (el textarea), añadimos el siguiente texto:->
document.getElementById('a').value = `
Gracias por utilizar los servicios de Heather_dev!! Espero que le sea útil este generador de nitro UNCHECKED

     ⢀⣀⣤⣤⡀⠀⠀⠀⠀⢀⣤⣤⣀⡀⠀⠀⠀⠀   
  ⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀  
 ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀ 
⢀⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⡀
⣸⣿⣿⣿⣿⡏⠀⠀⠀⢻⣿⣿⡟⠀⠀⠀⢹⣿⣿⣿⣿⣇  
⣿⣿⣿⣿⣿⣧⡀⠀⣀⣾⣿⣿⣷⣀⠀⢀⣼⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
⠙⠻⢿⣿⣿⣶⡭⠙⠛⠛⠛⠛⠛⠛⠋⢭⣶⣿⣿⡿⠟⠋  
⠀⠀⠀⠈⠙⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠋⠁⠀⠀⠀

―――――――――――――――――――――――――――――――――――――――
[INFO] Generador de Códigos de NITRO.
[INFO] Los códigos se publicarán exactamente aquí.
[INFO] La mayoría de los códigos no funcionaran (Para eso utiliza algún CHECKER DE NITRO)!!
____
―――――――――――――――――――――――――――――――――――
`; 

//<-Definimos que hay nada en el elemento b->
document.getElementById('b').value = '';
}

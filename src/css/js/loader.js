//<-Preloader (Pantalla de carga), creamos una función para "crear una ventana"->
(function LoaderScreenScript(window = window, document = window.document, undefined = window.undefined || void 0) {
    
    let processingTime = 0, condition = function() { return document.body}, timeout = function() { return (processingTime * 1e3) / 2},
            
    loaderScreenFontSize = typeof window.loaderScreenFontSize != 'undefined' ? window.loaderScreenFontSize : 30,
            loaderScreenMargin = typeof window.loaderScreenMargin != 'undefined' ? window.loaderScreenMargin : 10,
            loaderScreenMessage = typeof window.loaderScreenMessage != 'undefined' ? window.loaderScreenMessage : '<p class="redactar">☕ Cargando...</p>',
            loaderScreenOpacity = typeof window.loaderScreenOpacity != 'undefined' ? window.loaderScreenOpacity : .75,
            loaderScreenTransition = typeof window.loaderScreenTransition != 'undefined' ? window.loaderScreenTransition : .675,
            loaderScreenWidth = typeof window.loaderScreenWidth != 'undefined' ? window.loaderScreenWidth : 7.5;
    
    //<-Creamos una función que va a "refrescar" la pantalla de carga como tal->
    function update() {
            
    //<-Establecemos un tiempo de espera->
    setTimeout(function() {
                
    // Initialization > (Data, Metadata)
    let data = document.createElement('loader-screen-element'),
    metadata = setInterval(function() {
    
    //<-Si la web ya cargo, entonces ejecuta dos funciones que vamos a crear, tituladas alpha y test->
    if(document.readyState == 'complete') {
    alpha();
    test()
    }});
    
    //<-Etapa de inserción->
    document.body.appendChild(data);
    
    // Estilo > <body> > Overflow
    document.body.style = ('overflow: hidden !important; pointer-events: none !important; user-drag: none !important; user-select: none !important;' + (document.body.getAttribute('style') || ' ')).trim();
    
    // Modificación > Data
                   
    //<-Html intento, básicamente vamos a definir ciertos tipos de estilos para que se añada en la web + algunas etiquetas html->
    data.innerHTML = '<style media=all type=text/css>' + '.redactar {display: block;font-family: monospace;white-space: nowrap;border-right: 4px solid;width: 12ch;animation: typing 2s steps(12), blink .5s infinite step-end alternate;overflow:hidden;}@keyFrames typing {from { width: 0}}@keyFrames blink { 50% { border-color:transparent}} body::selection {' + 'background-attachment: fixed; background-size: cover;background-color: transparent !important;' + 'text-shadow: none !important' + '} ' +
    '@keyframes rotate {' + '0% { transform: rotate(0) }' +
    'to { transform: rotate(360deg) }' + '}' + '</style>' +
    "<div style='animation: rotate 1s ease-in-out 0s infinite backwards; border: " + loaderScreenWidth + "px solid rgba(0, 0, 0, " + loaderScreenOpacity + "); border-top-color: rgba(0, 51, 255, " + loaderScreenOpacity + "); border-radius: 50%; height: 75px; margin: 0 auto; margin-bottom: " + loaderScreenMargin + "px; width: 75px'> </div>" + "<small style='color: rgba(127, 127, 127, .675); font-family: \"Open Sans\", \"Calibri Light\", Calibri, sans-serif; font-size: " + loaderScreenFontSize + "px !important; margin: 0 auto; margin-top: " + loaderScreenMargin + "px; text-align: center'> " + loaderScreenMessage + " </small>";
    
    //<-El estilo (CSS)->
    data.style = 'align-items: center; background-color: BLACK; display: flex; flex-direction: column; height: ' + innerHeight + 'px; justify-content: center; left: 0; margin: auto; max-height: 100% !important; max-width: 100% !important; min-height: 100vh; min-width: 100vh; position: fixed; top: 0; transition: ' + loaderScreenTransition + 's ease-in-out; width: ' + innerWidth + 'px; z-index: 2147483647';
    
    //<-Creamos una función llamada "Alpha", que básicamente remueve el tiempo de espera de la pantalla de carga->
    function alpha() {
    // Clear Interval
    clearInterval(metadata)
    };
    
    // Test
    function test() {
    //Estilo > Información
        
    // Background Color
    data.style.backgroundColor = 'transparent';
    
    // Opacity
    data.style.opacity = 0;
    
    // Set Timeout
    setTimeout(function() {
                            
    //<-Eliminamos la información (de la pantalla de carga"->
    data.remove();
    
    //Modificación > <body> > estilo
    document.body.style = document.body.getAttribute('style').replace('overflow: hidden !important;', '').replace('pointer-events: none !important;', '').replace('user-drag: none !important;', '').replace('user-select: none !important;', '');
        
    (document.body.getAttribute('style') || '').trim() || document.body.removeAttribute('style')
                        
    }, ((+getComputedStyle(data).getPropertyValue('animation-delay').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('animation-duration').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('transition-delay').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('transition-duration').replace(/[a-zA-Z]/g, '').trim()) * 1e3) + 100);
                    }
            }, timeout())
        };
    
    /* Logic
                [if:else if:else statement]
    */
    
    //<-Si la función llamada "condition" se cumple, refrescamos la pantalla de carga, removiendola->
    if(condition())
    
    //<-Usamos la función update->
    update();
    
    else {
        
    // Inicialización > Data
    var data = setInterval(function() {
        
    /* Logic:
    [if:else if:else statement]*/
    
    //<-Si la función condition se cumple, el tiempo de procesamieinto de espera se suma 1->
    if(condition()) {
        
    // Update > Tiempo de procesamiento
    processingTime += 1;
    
    //<-Usamos la función actualizar->
    update();
    
    //<-Usamos la función Metadata->
    metadata()
        }
    });
    
    // Function > Metadata, básicamente esta función remueve el tiempo de espera de la pantalla de carga, y si no hay "data" (información) simplemente remueve la pantalla de carga
    function metadata() {
                
    //<--Remueve el tiempo de espera-->
    clearInterval(data);
    
    /* Logic
    
    [if:else if:else statement]
    
    > Deletion */
                
    //<-Si la "data" de la ventana y el inicio de data es indefinido, la elimino->    
    if('data' in window && typeof data == 'undefined')
                    delete window.data
            }
        }
    })(window, window.document, window.undefined || void 0)
let init = {
    links : ["perfil","portfolio","contacto"],
    contador : 0,
    visible: true,
    nombre: "",
    apellido: "",
    usuarios: []

};

let reducer = (prev=init,action) => {
    switch(action.type)
    {
        // case "AUMENTAR":
        //     return { ...prev, x : prev.x + 1, y:prev.y -1 };
        case "CONTADOR_AUMENTAR":
            return {...prev, contador : prev.contador+1};
        case "CONTADOR_DISMINUIR":
            return {...prev, contador : prev.contador-1};
        case "CONTADOR_RESETEAR":
            return {...prev, contador : prev.contador=0};
        case "FORMULARIO_TOGGLE":
            return {...prev, visible : !prev.visible};
        case "FORMULARIO_CHANGE":
            return {...prev, [action.id] : action.valor};
        case "FORMULARIO_SUBMIT":
            return {...prev, visible : [...prev.usuarios,{nombre:prev.nombre,apellido:prev.apellido}],nombre:"",apellido:""};
        default:
            return prev;
    }
}
export default reducer;
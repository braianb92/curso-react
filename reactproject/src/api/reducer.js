let init = {
    links : ["perfil","portfolio","contacto"],
    contador : 0

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
        default:
            return prev;
    }
}
export default reducer;
export let aumentarContador = () => ({type : "CONTADOR_AUMENTAR"});

export let disminuirContador = () => ({type : "CONTADOR_DISMINUIR"});

export let resetearContador = () => ({type : "CONTADOR_RESETEAR"});

export let toogleVisibility = () => ({type : "FORMULARIO_TOOGLE"});

export let handleSubmit = e => {
    e.preventDefault()
    return{type : "FORMULARIO_SUBMIT"}
};

export let handleChange = e => ({
    type : "FORMULARIO_CHANGE",
    valor : e.target.value,
    id : e.target.id
});
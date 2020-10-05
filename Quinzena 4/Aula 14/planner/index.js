function novaTarefa(){
    const shoppingcart = document.getElementById("tarefa")
    const cartvalue = shoppingcart.value
    const semana = document.getElementById("dias-semana")
    const dia = semana.value

    if(cartvalue !== ""){
        const list = document.getElementById(dia)
        list.innerHTML += `<li>${cartvalue}</li>`
        shoppingcart.value = ""
    }
    else{
        alert("Insira alguma tarefa na barra de tarefas")
    }

}
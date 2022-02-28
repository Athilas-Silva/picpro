// Pegando a lista
const list = document.querySelector(".optionsTransactions");

//Adicionando evento de click
list.addEventListener("click", (e) =>{
    //Identificando onde ocorreu o click
    const element = e.target;

    //Verificando se é um LI
    if(element.tagName == "LI"){
        //Recuperando o Id
        const id = element.id;

        //Selecionando uma seção utilizando o Id
        const sectionChoice = document.querySelector(`div[data-id="${id}"]`);

        //Removendo classe
        removeClassShow();

        // Adicionando classe
        sectionChoice.classList.add("show");
    }
});

function removeClassShow(){
    const divs = document.querySelectorAll("#sectionTransaction .container div");

    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove("show");
    }
}

//Pegando a imagem do olho e o valor do saldo
const eye = document.querySelector("#eye");
const values = document.querySelector("#values");

eye.addEventListener("click", () =>{
    values.classList.toggle("hide");
    values.innerHTML = "----";

    if(values.className == ""){
        values.innerHTML = "R$ 15.000";
    }
});

// Aviso de boleto pago
const btnTicket = document.querySelector("#btn-ticket");

btnTicket.addEventListener("click", () =>{
    alert("Boleto pago com sucesso, verifique seu Email");
});

// Pegando os valores dos inputs e enviando um alert com o nome e o valor
const btnDemand = document.querySelector("#demand-btn");
const nameDebtor = document.querySelector(".name");
const fieldNumber = document.querySelector(".number");

btnDemand.addEventListener("click", () => {
    let fieldName = nameDebtor.value;
    let fieldValue = fieldNumber.value;

    alert(`Enviado com sucesso para ${fieldName} com o valor de R$ ${fieldValue}`);
});
function hide (){
    form = document.getElementById("form")
    botao = document.getElementById("adicionar")

    if (botao.style.display === "none"){
        form.style.display = "none"
        botao.style.display = "initial"
    }
    else{
        form.style.display = "initial"
        botao.style.display = "none"
        document.getElementById("text").value = ""
    }
}

function createCloseButton(li) {
    let btn = document.createElement("button")
    btn.innerHTML = "\u00D7";
    btn.addEventListener("click", function () {
        btn.parentElement.style.display = "none"
    });
    li.appendChild(btn);
};
function createCheckBox(li) {
    let btn = document.createElement("button")
    btn.innerHTML = "Done";
    btn.addEventListener("click", function () {
        if (btn.parentElement.style.textDecoration === "line-through"){
            btn.parentElement.style.textDecoration = "initial"
        }
        else{
            btn.parentElement.style.textDecoration = "line-through"
        }
    });
    li.appendChild(btn);
}

function add (){
    let value = document.getElementById("text").value + " "
    if (value != " "){
        let li = document.createElement("LI")
        let new_item = document.createTextNode(value)
        li.appendChild(new_item)

        document.querySelector("ul").appendChild(li)
        hide()
        createCheckBox(li)
        createCloseButton(li)
    }
}
function handleSubmit(event){
    event.preventDefault();

    const inputText = document.getElementById("input-text").value;

    if (inputText.trim() !==""){
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";

        li.appendChild(document.createTextNode(inputText));

        const buttonDelete = document.createElement("button");
        buttonDelete.className = "btn btn-danger btn-sm delete";
        buttonDelete.setAttribute("type", "button");
        buttonDelete.appendChild(document.createTextNode("Excluir"));

        li.appendChild(buttonDelete);

        document.getElementById("list").appendChild(li);
        document.getElementById("inputText").value = "";

    }else{
        alert ("Por favor, preencha o campo de texto!");
    }
}


function handleDelete (event) {
    if (event.target.classList.contains("delete")) {
        if (confirm("Deseja realmente excluir?")){
            const li = event.target.parentElement;

            document.getElementById("list").removeChild(li);

        }
    }

}
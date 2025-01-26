export function renderTodo(title,text,deadlineDays,id, projList) {
    let toDoNode = document.querySelector(".card");
    let addButton = document.querySelector(".card-add");
    let toDoDOM = document.querySelector(".cards");
    let toDoClone = toDoNode.cloneNode(true);
    let cardTitle = toDoClone.querySelector(".card-title");
    cardTitle.textContent = title;
    let cardText = toDoClone.querySelector(".card-text");
    let cardDeadline = toDoClone.querySelector(".card-deadline");
    cardText.textContent = text.length > 91 ? text.substr(0,91) + "..." : text;
    cardDeadline.textContent = `Days till deadline: ${deadlineDays}`;
    toDoClone.setAttribute("id",id)
    toDoClone.removeAttribute("style");
    toDoClone.classList.add("card-active");
    toDoClone.addEventListener("click", (e) => {
        openCard(projList, e.target.id);
        projList.saveLocalStorage();
    })
    toDoDOM.insertBefore(toDoClone, addButton);
}

export function clearCards() {
    let allCards = document.querySelectorAll(".card-active");
    allCards.forEach((e) => {
        e.remove();
    })
}

export function openCard(projList, cardId) {
    let cardNode = document.querySelector(".todo-container");
    let cardOpen = document.querySelector("#card-edit");
    let cardOpenNew = cardOpen.cloneNode(true); 
    let cardCloseButton = cardOpenNew.querySelector(".title-bar-delete-edit");
    let cardOpenNewTitle = cardOpenNew.querySelector("#title-edit");
    let cardOpenNewText = cardOpenNew.querySelector("#text");
    let index = projList.currentProject.todoList.findIndex( toDo => toDo.id == cardId)
    cardOpenNewTitle.value = projList.currentProject.todoList[index].title;
    cardOpenNewText.value = projList.currentProject.todoList[index].text;
    cardOpenNew.removeAttribute("style");
    cardCloseButton.addEventListener("click", () => {
        cardOpenNew.remove();
        projList.saveLocalStorage();
    })
    cardNode.appendChild(cardOpenNew);
}

export function showToDoDiv(projList) {
    clearCards();
    for (let toDo of projList.currentProject.todoList) {
        renderTodo(toDo.title,toDo.text,toDo.getDaysTilDeadline(), toDo.id, projList);
    }
}
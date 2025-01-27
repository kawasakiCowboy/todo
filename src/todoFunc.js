export function renderTodo(id, projList, toDo) {
    const toDoNode = document.querySelector(".card");
    const addButton = document.querySelector(".card-add");
    const toDoDOM = document.querySelector(".cards");
    const toDoClone = toDoNode.cloneNode(true);
    toDoClone.querySelector(".card-title").textContent = toDo.getTitle();
    toDoClone.querySelector(".card-text").textContent = toDo.getTruncatedText();
    toDoClone.querySelector(".card-deadline").textContent = toDo.getDeadlineMessage();
    toDoClone.setAttribute("id",id);
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
    cardOpenNew.querySelector("#title-edit").value = projList.getCurrentProject().getToDoList()[projList.findCardIndexById(cardId)].getTitle();
    cardOpenNew.querySelector("#text").value = projList.getCurrentProject().getToDoList()[projList.findCardIndexById(cardId)].getText();
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
        renderTodo(toDo.id, projList, toDo);
    }
}
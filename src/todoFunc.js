export function renderTodo(id, projList, toDo) {
    if (toDo.getStatus() !== "deleted") {
    const toDoNode = document.querySelector(".card");
    const addButton = document.querySelector(".card-add");
    const toDoDOM = document.querySelector(".cards");
    const toDoClone = toDoNode.cloneNode(true);
    toDoClone.querySelector(".card-title").textContent = toDo.getTitle();
    toDoClone.querySelector(".card-text").textContent = toDo.getTruncatedText();
    toDoClone.querySelector(".card-deadline").textContent = toDo.getDeadlineMessage();
    toDoClone.setAttribute("id",id);
    toDoClone.removeAttribute("style");
    toDoClone.classList.add("card-active", "pointer");
    if (toDo.getStatus() === "done") {
        toDoClone.classList.add("done");
    }
    toDoClone.addEventListener("click", (e) => {
        openCard(projList, e.currentTarget.id);
        projList.saveLocalStorage();
    })
    toDoDOM.insertBefore(toDoClone, addButton);
}
}

export function clearCards() {
    let allCards = document.querySelectorAll(".card-active");
    allCards.forEach((e) => {
        e.remove();
    })
}

export function openCard(projList, cardId) {
    const cardNode = document.querySelector(".todo-container");
    const cardOpen = document.querySelector("#card-edit");
    const cardOpenNew = cardOpen.cloneNode(true); 
    const cardCloseButton = cardOpenNew.querySelector(".card-close-button");
    const cardDeadline = cardOpenNew.querySelector(".deadline-picker");
    const deadline = projList.getCurrentProjectToDoById(cardId).getDeadline().toISOString().substring(0, 10);
    const status = cardOpenNew.querySelector("#status");
    status.value = projList.getCurrentProjectToDoById(cardId).getStatus();
    cardDeadline.value = deadline;
    const cardDelete = cardOpenNew.querySelector(".title-bar-delete-edit");
    cardOpenNew.querySelector("#title-edit").value = projList.getCurrentProjectToDoById(cardId).getTitle();
    cardOpenNew.querySelector("#text").value = projList.getCurrentProjectToDoById(cardId).getText();
    cardOpenNew.removeAttribute("style");
    cardCloseButton.addEventListener("click", () => {
        cardOpenNew.remove();
        projList.saveLocalStorage();
    })
    cardOpenNew.addEventListener("submit", (e) => {
        e.preventDefault();
        let deadlineFormat = new Date(cardDeadline.value);
        projList.getCurrentProjectToDoById(cardId).editTitle(cardOpenNew.querySelector("#title-edit").value);
        projList.getCurrentProjectToDoById(cardId).editText(cardOpenNew.querySelector("#text").value);
        projList.getCurrentProjectToDoById(cardId).editDeadline(deadlineFormat);
        console.log(status.value);
        projList.getCurrentProjectToDoById(cardId).editStatus(status.value);
        showToDoDiv(projList);
        cardOpenNew.remove();
        projList.saveLocalStorage();
    })
    cardDelete.addEventListener("click", () => {
        projList.getCurrentProjectToDoById(cardId).deleteTodo();
        showToDoDiv(projList);
        cardOpenNew.remove();
        projList.saveLocalStorage();
    })

    cardNode.appendChild(cardOpenNew);
}

export function showToDoDiv(projList) {
    clearCards();
    for (let toDo of projList.getCurrentProject().getToDoList()) {
        renderTodo(toDo.id, projList, toDo);
    }
}
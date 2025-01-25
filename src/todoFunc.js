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
    let cardOpenNewTitle = document.querySelector("#title-edit");
    cardOpenNewTitle.value = projList.currentProject.todoList[0].title;
    cardOpen.removeAttribute("style");
    cardNode.appendChild(cardOpenNew);
    console.log(cardCloseButton);
    cardCloseButton.addEventListener("click", () => {
        console.log("privet");
        cardOpenNew.remove();
    })
    
}

export function showToDoDiv(projList) {
    clearCards();
    for (let toDo of projList.currentProject.todoList) {
        renderTodo(toDo.title,toDo.text,toDo.getDaysTilDeadline(), toDo.id, projList);
    }
}
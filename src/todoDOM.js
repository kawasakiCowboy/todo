export function renderTodo(title,text,deadlineDays) {
    let toDoNode = document.querySelector(".card");
    let addButton = document.querySelector(".card-add");
    let toDoDOM = document.querySelector(".cards");
    let toDoClone = toDoNode.cloneNode(true);
    let cardTitle = toDoClone.querySelector(".card-title");
    cardTitle.textContent = title;
    let cardText = toDoClone.querySelector(".card-text");
    let cardDeadline = toDoClone.querySelector(".card-deadline");
    cardText.textContent = text.length > 91 ? text.substr(0,91) + "..." : text;
    cardDeadline.textContent = `Days till deadline: ${deadlineDays}`
    toDoClone.removeAttribute("style");
    toDoClone.classList.add("card-active");
    toDoDOM.insertBefore(toDoClone, addButton);
}

export function clearCards() {
    let allCards = document.querySelectorAll(".card-active");
    allCards.forEach((e) => {
        e.remove();
    })
}
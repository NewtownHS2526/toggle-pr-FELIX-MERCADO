    const heading = document.querySelector("#heading")

    heading.addEventListener("click", () => {
        heading.classList.toggle("blue-text");
    })

    const subheading = document.querySelector("#subheading")

    subheading.addEventListener("click", () => {
        subheading.classList.toggle("blue-text");
    })

    const replyButton = document.querySelector("#reply-button")
    const replyMessage = document.querySelector("#reply-message")
    
    replyButton.addEventListener("click", () => {
        replyMessage.classList.remove("hidden");
    })

    const sendButton = document.querySelector("#send-button");
    const cancelButton = document.querySelector("#cancel-button");

    cancelButton.addEventListener("click", () => {
        replyMessage.classList.add("hidden");
    })
    sendButton.addEventListener("click", () => {
        replyMessage.classList.add("hidden");
    })

    const openBtn = document.querySelector("#open-button");
    const inbox = document.querySelector("#inbox");
    const inboxMessage = document.querySelector("#inbox-message");
    const unreadBtn = document.querySelector("#mark-button");

    const openMessage = () => {
        inbox.classList.add("is-read");
        inboxMessage.classList.remove("hidden");
        unreadBtn.classList.remove("hidden");
    };

    openBtn.addEventListener("click", openMessage);

    

const closeBtn = document.querySelector("#close");

const closeMessage = () => {
    inboxMessage.classList.add("hidden");
};

closeBtn.addEventListener("click", closeMessage);


const markUnread = () => {
    inboxMessage.classList.add("hidden");
    inbox.classList.remove("is-read");
    unreadBtn.classList.add("hidden");
};

unreadBtn.addEventListener("click", markUnread);

const toggleCustomClass = () => {
    if (inbox.classList.contains("is-read")) {
        inbox.classList.add("read");
    }
};

subtitle.addEventListener("click", toggleCustomClass);


const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
};

checkbox.addEventListener("click", handleCheckbox);


const deleteBtn = document.querySelector("#Deletebtn");

const handleDelete = () => {
    inbox.classList.toggle("hidden");

    if (deleteBtn.innerHTML === "Delete Message(s)") {
        deleteBtn.innerHTML = "Undo Deletion";
    } else {
        deleteBtn.innerHTML = "Delete Message(s)";
    }
};

deleteBtn.addEventListener("click", handleDelete);


const readBtn = document.querySelector("#Markbtn");

const markRead = () => {
    unreadBtn.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};

readBtn.addEventListener("click", markRead);

const Darkbtn = document.querySelector("#Dark")
const body = document.querySelector("body")

Darkbtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
})
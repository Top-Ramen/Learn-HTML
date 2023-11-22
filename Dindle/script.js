var popOverlay = document.querySelector(".popup-overlay")
var popBox = document.querySelector(".popupbox")
var addButton = document.getElementById("add-pop-up-button")
var cancelButton = document.querySelector("#Cancel-Popup")
var addBook = document.getElementById("Add-Book")
addBook.addEventListener("click",function () {
    let title = document.getElementById("Book-Title-Input")
    let author = document.getElementById("Book-Author-Input")
    let description = document.getElementById("Book-Description-Input")
    createElement(title.value, author.value, description.value)
    closePopUp()
})
addButton.addEventListener("click",function (){
    show();
    
})
cancelButton.addEventListener("click",function (){
    closePopUp()
})
function show() {
    popOverlay.style.display = "block"
    popBox.style.display = "block"
}
function closePopUp() {
    popOverlay.style.display = "none"
    popBox.style.display = "none"
}
function createElement(title, author, description){
    console.log(title)
    console.log(author)
    console.log(description)
    var newElement = document.createElement("div")
    newElement.setAttribute("class","book-container")
    var elementTitle = document.createElement("h2")
    elementTitle.textContent = title
    var elementAuthor = document.createElement("h5")
    elementAuthor.textContent = author
    var elementDescription = document.createElement("p")
    elementDescription.textContent = description
    var elementDelete = document.createElement("button")
    elementDelete.textContent = "Delete"
    newElement.appendChild(elementTitle)
    newElement.appendChild(elementAuthor)
    newElement.appendChild(elementDescription)
    newElement.appendChild(elementDelete)
    // newElement.insertAdjacentElement("beforeend", document.createElement("h2").textContent=title)
    // newElement.insertAdjacentElement("beforeend", document.createElement("h5").textContent=author)
    // newElement.insertAdjacentElement("beforeend", document.createElement("p").textContent=description)
    // newElement.insertAdjacentElement("beforeend", document.createElement("button").textContent=Delete)
    // newElement.innerHTML = "<h2>"+title+"</h2>"
    // newElement.innerHTML = "<h5>"+author+"</h5>"
    // newElement.innerHTML = "<p>"+description+"</p>"
    // newElement.innerHTML = "<button>Delete</button>"        
    var containerElement = document.querySelector(".container")
    containerElement.appendChild(newElement)
}
function def(event){
    event.preventDefault();
}
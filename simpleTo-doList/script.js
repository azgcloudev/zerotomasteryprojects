var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function delbtn() {
	let delbutton = document.createElement('button');
	delbutton.innerText = 'X';
	delbutton.classList.add('deleteBtn');
	return delbutton;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delbtn());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//create a delete button
function createDeleteButton() {
	let btnDel = document.createElement('button');
	btnDel.innerText = 'X';
	return btnDel;
}

function deleteListElement(event) {
	if (event.target.tagName.toLowerCase() === 'button') {
		// do your action on your 'li' or whatever it is you're listening for
		event.target.parentElement.remove();
	}
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

ul.addEventListener('click', deleteListElement);
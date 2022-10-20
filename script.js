const addBtn = document.querySelector(".add-btn");
const removeAllBtn = document.querySelector(".remove-all-btn");
const noteRemoveBtn = document.querySelector(".note-btn");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const popup = document.querySelector(".popup");
const category = document.querySelector("#category");
const txtarea = document.querySelector("#content");
const error = document.querySelector(".error");

const container = document.querySelector(".container");

let createNew = true;
let noteId = 0;

function showPopup() {
  popup.style.display = "flex";
}

function addNote() {
  checkCorrect();
  let note;

  if (createNew) {
    note = createNote();
    container.appendChild(note);
    hidePopup();
  }
}

function checkCorrect() {
  if (
    category.options[category.selectedIndex].value == 0 ||
    txtarea.value == ""
  ) {
    error.style.visibility = "visible";
    createNew = false;
  } else {
    error.style.visibility = "hidden";
    createNew = true;
  }
}

function createNote() {
  let areaText = txtarea.value;
  let categoryText = category.options[category.selectedIndex].text;

  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `

    <div class="top">
            <h2>${categoryText}</h2>
            <button onclick ="deleteNote(${noteId})" class="note-remove">&cross;</button>
          </div>
          <div class="bottom">
            <p>
              ${areaText}
            </p>
          </div>
    `;
  noteId++;
  return note;
}

function deleteNote(id) {
  document.querySelectorAll(".note")[id].remove();
}

function hidePopup() {
  popup.style.display = "none";
  category.selectedIndex = 0;
  txtarea.value = "";
  error.style.visibility = "hidden";
}

function removeAllNotes() {
  container.innerHTML = " ";
}

addBtn.addEventListener("click", showPopup);
cancelBtn.addEventListener("click", hidePopup);
saveBtn.addEventListener("click", addNote);
removeAllBtn.addEventListener("click", removeAllNotes);

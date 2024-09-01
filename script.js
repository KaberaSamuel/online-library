const newBook = document.querySelector("#new-book");
const dialog = document.querySelector("dialog");
const addBook = document.querySelector("#add-book");
const cancelForm = document.querySelector("#cancel");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");

const pagesInput = document.querySelector("#pages");
const checkbox = document.querySelector("input[type=checkbox]");

const myLibrary = [];

function Book(title, author, read, pages) {
  (this.title = title),
    (this.author = author),
    (this.isRead = read),
    (this.pages = pages);
  this.htmlContent = createBookHtml(this);
}

function createBookHtml(book) {
  // 1. Creating a div element which be a container of book html content
  const div = document.createElement("div");
  div.setAttribute("class", "book");
  if (div.isRead) {
    div.classList.add("read");
  } else {
    div.classList.add("unread");
  }

  // 2. creating first p html element which will icon regarding if book has been read or not
  const span = document.createElement("span");
  span.setAttribute("class", "material-symbols-outlined");
  if (book.isRead) {
    span.textContent = "check";
    span.classList.add("tick-icon");
  } else {
    span.textContent = "close";
    span.classList.add("cross-icon");
  }

  const para = document.createElement("p");
  para.appendChild(span);
  para.insertAdjacentText("beforeend", "Read");
  div.appendChild(para);

  // 3. inserting remaining html content
  div.insertAdjacentHTML(
    "beforeend",
    `        
      <div class="middle">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <div>
          <p class="check-read">Mark Unread</p>
          <p class="delete">Delete Book</p>
        </div>
      </div>
      <p>${book.pages} pages</p>
    `
  );

  return div;
}

function updateUI() {
  main.innerHTML = "";
  for (let item of myLibrary) {
    main.appendChild(item.htmlContent);
  }
}

// modal functionalities
cancelForm.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

addBook.addEventListener("click", () => {
  const book = new Book(
    titleInput.value,
    authorInput.value,
    checkbox.checked,
    pagesInput.value
  );

  myLibrary.push(book);
  updateUI();
  dialog.close();
});

const main = document.querySelector("main");
const book1 = new Book("The Avengers", "Stan lee", true, 665);
const book2 = new Book("Alita Battle", "James Cameron", true, 444);
const book3 = new Book("The avatar", "James Cameron", false, 1021);
const book4 = new Book("Doctor Strange", "Kevin Fiege", true, 902);
const book5 = new Book("Titanic", "James Cameron", false, 767);
const book6 = new Book("The last airbender", "Richard Wenk", true, 1502);
myLibrary.push(book1, book2, book3, book4, book5, book6);

updateUI();

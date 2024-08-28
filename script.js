const myLibrary = [];

function Book(title, author, read, pages) {
  (this.title = title),
    (this.author = author),
    (this.isRead = read),
    (this.pages = pages);
}

const main = document.querySelector("main");
const book1 = new Book("The Avengers", "Stan Lee", true, 665);
// const book2 = new Book('Moon Knight', 'Ray Reynolds', false, 330)
// const book3 = new Book('The secrets of Dumbledore', 'Zack-synder', true, 700);

myLibrary.push(book1);
// myLibrary.push(book2)
// myLibrary.push(book3)

function generateIcon(book) {
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
  return para;
}

for (let item of myLibrary) {
  const div = document.createElement("div");
  div.appendChild(generateIcon(item));
  div.insertAdjacentHTML(
    "beforeend",
    `        
        <div class="middle">
          <p class="title">The Avengers</p>
          <p class="author">stan lee</p>
          <div>
            <p class="check-read">Mark Unread</p>
            <p class="delete">Delete Book</p>
          </div>
        </div>
        <p>5 pages</p>
        `
  );

  if (item.isRead) {
    div.classList.add("read");
  } else {
    div.classList.add("unread");
  }

  main.appendChild(div);
}

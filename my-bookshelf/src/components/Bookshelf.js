import { useState } from "react";
import './Bookshelf.css';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);

    const addBook = () => {
        const bookName = document.getElementById("book-name").value;
        const bookWidth = getRandomNumber(30, 70);
        const bookHeight = getRandomNumber(120, 160);
        const bookColor = getRandomColor();
        const newBook = {
          name: bookName,
          width: bookWidth,
          height: bookHeight,
          color: bookColor,
        };
        setBooks((prevBooks) => [...prevBooks, newBook]);
      };
    
      const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    
      const getRandomColor = () => {
        const colors = ["red", "blue", "green", "yellow", "purple"];
        return colors[Math.floor(Math.random() * colors.length)];
      };

      return (
        <div className="App">
          <div className="bookshelf">
            <div className="shelf"></div>
            {books.map((book, i) => (
              <div
                className={`book ${book.color}`}
                key={i}
                style={{ width: `${book.width}px`, height: `${book.height}px` }}
              >
                {book.name}
              </div>
            ))}
        </div>

        <form>
            <label htmlFor="book-name">Book Name:</label>
            <input type="text" id="book-name" name="book-name" />
            <button type="button" onClick={addBook}>Add Book</button>
        </form>
        </div>
    )
}

export default Bookshelf;
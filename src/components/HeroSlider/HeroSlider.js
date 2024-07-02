import { useState } from "react";
import { data } from "./data";
import "./HeroSlider.css";
import { useGlobalContext } from "../../context";


function HeroSlider() {

  const [heroBook, setHeroBook] = useState(0);
  const { order, bookTitle, author, caption, image } = data[heroBook];
  const { book, addBook, handleAlert } = useGlobalContext();

  const previousBook = () => {
    setHeroBook((heroBook) => {
      heroBook --;
      if (heroBook < 0) {
        return data.length - 1;
      }
      return heroBook;
    });
  };

  const nextBook = () => {
    setHeroBook((heroBook) => {
      heroBook ++;
      if (heroBook >= data.length) {
        return 0;
      }
      return heroBook;
    });
  };

  const handleAddBook = () => {
    if (bookTitle && image) {
        const book = {
            id: new Date().getTime().toString(), // unique ID for the book
            title: bookTitle,
            cover_img: image,
            author,
            caption
        };
        addBook(book);
        handleAlert();
    } else {
        alert("Book title and image are required to add a book.");
    }
};

  return(
    <div>
    <div className='book-details-content grid'>
      <div className="hero-img">
      <img src={image} alt="book cover" />
      </div>
      <div className='book-details-info'>
        <div className='book-details-item title'>
          <p className="text-grey fs-22">{order} </p>
          <h1 className="text-green fs-26 ls-1">{bookTitle}</h1>
          <p className='fw-6 fs-23'>{author} </p>
          </div>
          <p className='book-details-item description fs-17'>{caption}</p>
          <button className='add-book-btn fs-14 fw-5' onClick={() => {handleAddBook(book); handleAlert()}}>Add book to my list</button>
      
      </div>
    </div>
    <div className="btn-container">
    <button className="back" onClick={previousBook}></button>
    <button className="forward" onClick={nextBook}></button>
    </div>
    </div>
  );
}

export default HeroSlider;



import { useState } from "react";
import { useGlobalContext } from "../../context";
import './MyBooks.css';

const MyBooks = () => {
    const { bookList, deleteBook } = useGlobalContext();
    const [suggestedBooks, setSuggestedBooks] = useState({});
    
    const handleSuggest = (bookId) => {
        setSuggestedBooks((prevSuggestedBooks) => ({
            ...prevSuggestedBooks,
            [bookId]: !prevSuggestedBooks[bookId]
        }));
    };
   
    return(
        <section className="flex-column">
        <div className="container">
            <div className="book-details-content flex-column">
                {bookList && bookList.map((book) => (
                    book && (
                    <div key={book.id} className="book-details-content grid">
                        <div className="added-book-img">
                        <img src={book?.cover_img} alt={book.title} className="cover" />
                        </div>
                        <div className="book-details-info">
                            <h3 className="book-details-item title">{book.title}</h3>
                            <div className="button-container">
                            <button className="add-book-btn fs-13 fw-5" onClick={() => handleSuggest(book.id)}>
                                {suggestedBooks[book.id] ? "Suggested" : "Suggest"}
                            </button>
                            <button className="add-book-btn fs-13 fw-5" onClick={() => deleteBook(book.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                ))}
            </div>
        </div>
        </section>
    )
}
export default MyBooks;
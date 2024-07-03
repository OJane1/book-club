import React, {useState, useContext, useEffect, useCallback} from 'react';
import Swal from 'sweetalert2';

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const [bookList, setBookList] = useState(
        localStorage.bookList ? JSON.parse(localStorage.bookList) : []);

    useEffect(() => {localStorage.setItem("bookList", JSON.stringify(bookList))
}, [bookList]);

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title, subject} = bookSingle;

                        return {
                            id: key,
                            author: author_name,
                            cover_id: cover_i,
                            edition_count: edition_count,
                            first_publish_year: first_publish_year,
                            title: title,
                            subject: subject ? subject.slice(0, 1) : []
                        };         
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    const addBook = (book) => {
        setBookList((prevBookList) => [...prevBookList, book]);
    }

    const deleteBook=(bookId) => {
        setBookList((prevBookList) => prevBookList.filter((book) => book && book.id !== bookId));
    }

    const handleAlert = () => {
        Swal.fire({
            title: "Book successfully added to your list!",
            icon: "success"
          });
    }

    return (
        <AppContext.Provider value = {{
            loading, 
            books, 
            setSearchTerm, 
            resultTitle, 
            setResultTitle, 
            bookList, 
            addBook, 
            handleAlert, 
            deleteBook
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};
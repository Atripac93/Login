import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import BookCard from "../cards/BookCard";
import LoadingIndicator from "../loading/LoadingIndicator";

const MainContent = () => {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    try {
      const resp = await fetch("https://epibooks.onrender.com/");
      const data = await resp.json();
      setBooks(data.slice(0, 12));
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getBooks();
  }, []);

  const changeInput = (e) => {
    setSearchBooks(e.target.value);
  };

  const filterBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBooks.toLowerCase())
  );

  return (
    <Container className="mt-3">
      <input
        className="mb-3"
        type="text"
        placeholder="Cerca libro..."
        value={searchBooks}
        onChange={changeInput}
      />
      <Row className="gap-3">
        {error && !isLoading && (
          <div className="fs-1 m-5">Si è verificato un errore!</div>
        )}
        {isLoading && <LoadingIndicator />}
        {!error && !isLoading && filterBooks.length === 0 && (
          <div className="fs-1 m-5">Libro non trovato!</div>
        )}
        {!error &&
          !isLoading &&
          filterBooks.map((book) => (
            <BookCard
              key={nanoid()}
              title={book.title}
              category={book.category}
              img={book.img}
            />
          ))}
      </Row>
    </Container>
  );
};

export default MainContent;

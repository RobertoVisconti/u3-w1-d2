import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BooksNavbar from "./components/BooksNavbar";
import BooksFooter from "./components/BooksFooter";
import Home from "./components/Home";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-secondary">
      <header>
        <BooksNavbar />
      </header>
      <main className="flex-grow-1">
        <Home />
      </main>
      <footer className="bg-dark">
        <BooksFooter />
      </footer>
    </div>
  );
}

export default App;

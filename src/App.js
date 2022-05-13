import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>

          <main className="dictionary-body">
            <Dictionary defaultKeyword="sunset" />
          </main>
        </header>
        <footer className="text-center">
          Coded by Himja Ved Open Sourced on{" "}
          <a
            href="https://github.com/himjaved/Dictionary"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://curious-pudding-1afc3c.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

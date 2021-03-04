import "./App.css";
import TextDisplay from "./components/textDisplay/TextDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>textInputBox Demo</h1>
        <br />
        <TextDisplay />
      </header>
      <body className="body"></body>
    </div>
  );
}

export default App;

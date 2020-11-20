import "./App.css";
import Card from "./components/Card";
import MessageList from "./containers/MessageList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <MessageList />
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Text from "./Text";

function App() {
  const textFieldCount = [];
  for (let i = 0; i < 20; i++) {
    textFieldCount.push(i);
  }
  return (
    <div className="App">
      <div className="AppWrapper">
        <div className="AppWrapperInner">
          <h1>Notepad</h1>
        </div>
        {/* Creates 20 text inputs */}
        {textFieldCount.map((t) => (
          <Text key={t} />
        ))}
      </div>
    </div>
  );
}

export default App;

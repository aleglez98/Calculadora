import './App.css';
import './Components/NumberButton/NumberButton';
import NumberButton from './Components/NumberButton/NumberButton';

function App() {
  return (
    <div className="App">
        <NumberButton number="AC" id="AC" />
        <NumberButton number="C" />
        <NumberButton number="%" />
        <NumberButton number="/" />
        <br />
        <NumberButton number="7" />
        <NumberButton number="8" />
        <NumberButton number="9" />
        <NumberButton number="*" />
        <br />
        <NumberButton number="4" />
        <NumberButton number="5" />
        <NumberButton number="6" />
        <NumberButton number="-" />
        <br />
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
        <NumberButton number="+" />
        <br />
        <NumberButton number="0" />
        <NumberButton id="igual" number="=" />
    </div>
  );
}

export default App;

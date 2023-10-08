import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';

function App() {

  const showValue = (value) => <>This is value: {value}</>
  const showMultipliedValue = (value) => <>The multiplied value is: {value * 10}</>

  return (
    <div className="App">
      <Input 
        renderTextBelow={showValue}
      />
      <br />
      <br />
      <br />
      <Input 
        renderTextBelow={showMultipliedValue}
      />
    </div>
  );
}

export default App;

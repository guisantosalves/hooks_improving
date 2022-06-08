import './App.css';
import CompA from './components/CompA'; // -> nothing
import CompB from './components/CompB'; // -> redender D
import CompC from './components/CompC'; // -> render E and render F

function App() {
  return (
    <div className="App">
      <CompA />
      <CompB />
      <CompC />
    </div>
  );
}

export default App;

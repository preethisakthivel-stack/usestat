
import './App.css';
import Colourit from './components/Colourit';
import Formvalid from './components/Formvalid';
import Header from './components/Header';
import Statefile from './components/Statefile';

function App() {
  return (
    <div>
      <Header></Header>
      <Statefile></Statefile>
      <Formvalid></Formvalid>
      <Colourit></Colourit>
    </div>
  );
}

export default App;

import './App.css';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { Produto } from './components/Produtos/Produtos';
function App() {
  return (
    <div className="App">
       <Menu/>
      <header className="App-header">
        <Banner/>
        <Produto />
      </header>
    </div>
  );
}

export default App;

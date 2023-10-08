
import Banner from './components/Banner/Banner';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;

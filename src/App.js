
import './App.css';
import {Cart, ProductListing} from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart/>
        <ProductListing/>
      </header>
    </div>
  );
}

export default App;

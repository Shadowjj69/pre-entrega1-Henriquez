import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Estamos en construccion" }/>
    </div>
  );
}

export default App;

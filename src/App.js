import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer />}/>  
      <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
      <Route path='category/:categoryId' element={<ItemListContainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

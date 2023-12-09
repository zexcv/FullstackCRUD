import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import List from "./pages/List";
import AddToList from "./pages/AddToList";
import UpdateItem from "./pages/UpdateItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<AddToList />}></Route>
          <Route path="/update/:id" element={<UpdateItem />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

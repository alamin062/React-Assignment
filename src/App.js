import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
          <Route path='/home' element={<Home />}></Route>
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
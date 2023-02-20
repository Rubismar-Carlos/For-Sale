import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Pages
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Adicionar from './Pages/Adicionar/Adicionar';
import Search from './Pages/Search/Search';
import Detalhes from './Pages/Detalhes/Detalhes';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>

          <Route path='/search' element={< Search />} />

          <Route path='/' element={ <Home /> }/>

          <Route path='/about' element={ <About /> } />

          <Route path='/publicar' element={ <Adicionar /> } />

          <Route path='/cars/:id' element={ <Detalhes /> } />

          <Route path='*' element={< NotFound />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './food/Header';
import About from './food/About';
import Menu from './food/Menu'
import Menu2 from './food/Menu2';
import Gallery from './food/Gallery';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Menu/>
      <Menu2/>
      <Gallery/>
      <Routes>
       <Route path="Header" element={<Header/>}/>
       <Route path="About" element={<About/>}/>
       <Route path="Menu" element={<Menu/>}/>
       <Route path="Menu2" element={<Menu2/>}/>
       <Route path="Gallery" element={<Gallery/>}/>
      </Routes>
    </div>
  );
}
export default App;

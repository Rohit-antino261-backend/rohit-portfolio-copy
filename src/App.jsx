import './app.scss'
import Home from './Pages/Home/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Card from './components/Card/Card';

function App() {
  
  return (
   <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
    </Routes>
    </BrowserRouter>
   </div>
    )
}

export default App;

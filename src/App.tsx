import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { GlobalStyle } from './Global';
import {Page} from './Page'

function App() {
  return (
  <>
  <BrowserRouter> 
    <GlobalStyle/> 
     <Routes>
       <Route path="/" element={<Page/>}></Route>
     </Routes>

  </BrowserRouter>
   
  </> 
  );
}

export default App;

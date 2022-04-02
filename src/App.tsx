import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { GlobalStyle } from './Global';
import {Page} from './Page'

function App() {
  return (
  <>
  <HashRouter> 
    <GlobalStyle/> 
     <Routes>
       <Route path="https://Caiopsilvsa.github.io/crypto-hj/" element={<Page/>}></Route>
     </Routes>

  </HashRouter>
   
  </> 
  );
}

export default App;

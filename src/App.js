import Profile from "./components/Profile";
import SelectPage from "./components/SelectPage";
import SignUp from "./components/SignUp";
import { 
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";
import Verify from "./components/Verify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUp/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/select' element={<SelectPage/>}/>
          <Route exact path='/verify' element={<Verify/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

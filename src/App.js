import {Routes ,Route, Navigate} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<Navigate to="/signup"/>}/>
    </Routes>
  );
}

export default App;

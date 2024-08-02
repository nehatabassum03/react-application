import Contact from "./pages/contact/Contact";
import Description from "./pages/description/Description";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

import{
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}>
      </Route>
      <Route exact path="/home" element={<Home/>}>
      </Route>
      <Route exact path="/home/contact" element={<Contact/>}>
      </Route>
      <Route exact path="/home/profile" element={<Profile/>}>
      </Route>
      <Route exact path="/home/description" element={<Description/>}>
      </Route>
    </Routes>
);
}



export default App;

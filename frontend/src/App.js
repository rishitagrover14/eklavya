import { useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar1";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./Home";
import About from "./components/About";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import { AuthProvider } from "./AuthContext";
import StudentDashboard from "./components/StudentPortal.js/StudentDashboard";
function App() {

  const [theme, colorMode] = useMode();
  return (
    <div>
      
       <BrowserRouter>
       <AuthProvider>
    <Routes>
    <Route index element={<Home />}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/studentportal' element={<StudentDashboard/>}></Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
     
    </div>
  );
}

export default App;

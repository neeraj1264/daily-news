import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App =()=> {
 const pageSize = 4
 const country = "in"
 const api = "e0e3dc15990f41b79bc5f00db5ba50ea"
 const [mode, setmode] = useState("light");
 const togglemode = () =>{
       if(mode === "light"){
          setmode ("dark")
          document.body.style.backgroundColor = "grey"
       }else{
          setmode ("light")
          document.body.style.backgroundColor = "white"
       }
    }

    return (
      <div>
        <Router>
        <Navbar mode={mode} togglemode={togglemode}/>
    <Routes>
            <Route Exact path="/" element={ <News key="sport" pageSize={pageSize} category="sport"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/business" element={<News key="business" pageSize={pageSize} category="business"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/general" element={<News key="general" pageSize={pageSize} category="general"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/health" element={<News key="health" pageSize={pageSize} category="health"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/science" element={<News key="science" pageSize={pageSize} category="science"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/sports" element={<News key="sports" pageSize={pageSize} category="sports"  country={country} api={api}/>}>
            </Route>
            <Route Exact path="/technology" element={<News key="technology" pageSize={pageSize} category="technology"  country={country} api={api}/>}>
            </Route>
          </Routes>
    </Router>
      </div>
    )
    // api="e0e3dc15990f41b79bc5f00db5ba50ea  6974ea6ca52b4d8698eb4e3519c0208e  26df97b3a00e462598657e5efca5f364"
  }

export default App
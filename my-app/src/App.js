import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },2000)
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled",'success');
      // document.title="TextUtils Dark Mode";
      // setInterval(()=>{
      //   document.title=" DestroyTextUtils ";
      // },1000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled",'success');
      // document.title="TextUtils light Mode"
    }
  }
  return (
    <>
  <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
      <Alert alert={alert}/>
      <Routes>
            <Route exact path="/about" element={<About mode={mode}  />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
      </Routes>
     
      
       {/* <About/>  */}
      </div>
      </Router>
    </>
  );
}

export default App;

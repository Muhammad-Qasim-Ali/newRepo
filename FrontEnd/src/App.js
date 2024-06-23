import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.classList.add('bg-gray-900');
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.classList.remove('bg-gray-900');
      document.body.classList.add('bg-white');
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
        <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} mode={mode} />
        <div className={`container mx-auto my-3 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
          <TextForm showAlert={showAlert} heading="Try TextEditor - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
        </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const[string, setString] = useState('');

  useEffect(() => {
    axios.post('http://92.63.192.160:8082/getData').then(r => {
      setString(r.data)
    })

  }, []);


  return (
    <div>
      {string}
    </div>
  );
}

export default App;

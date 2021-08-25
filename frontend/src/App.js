import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Home from './Components/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route,
  Link
} from "react-router-dom";



function App() {
  // const [bookListData, setBookListData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/books")
  //     .then(response => response.json())
  //     .then((data) => setBookListData(data))
  //     .then(() => alert("The list is set"))
  //     .then(console.log('this is the bookList from the useEffect: ', bookListData))

  // }, []) bookListData={bookListData}



  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

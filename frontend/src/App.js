import './App.css';
import Home from './Components/Home.js'
import Books from './Components/Books.js';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [bookListData, setBookListData] = useState([]);
  const [bookDetails, setBookDetails] = useState({})
  const [checkoutStatus, setCheckoutStatus] = useState(false)
  const [dueIn, setDueIn] = useState('')
  const [userId, setUserId] = useState('')

  const handleCheckoutStatus = (status) => {
      checkoutStatus(status)
      if (checkoutStatus === false) {
          return "Book is checked-in"
      } else if (checkoutStatus === true) {
          return "Book is checked-out"
      } else {
          return "not sure what you are talking about?"
      }
  }

  const changeCheckoutStatus = (input) => {
    setCheckoutStatus(input)
    console.log("checkoutStatus was changed")
    //---------------------------------Patch
  }

  const handleClick = (input) => {
      setBookDetails(input)
      console.log("The button was clicked");
    }
  
  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(response => response.json())
      .then((data) => {setBookListData(data.data); return data})
      //.then(() => alert("The list is set"))
      .then((data) => console.log('this is the Data from the useEffect in Home.js: ', data))
  }, [])
  

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home  handleClick={handleClick} bookListData={bookListData}/>
        </Route>
        <Route exact path='/Books'>
          <Books  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



// axios.post('/login', {
//      Title:  'Epstein didn't kill himself',
//      Author:  'Scott Shannon',
//      ISBNNumber: '123456789',
//      checkoutStatus: true
// })
// .then((response) => {
//   console.log(response);
// }, (error) => {
//   console.log(error);
// });
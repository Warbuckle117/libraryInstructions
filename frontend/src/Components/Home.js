import logo from '../logo.svg';
import BookList from './BookList';
import React, { useState, useEffect } from 'react';

function Home (props) {
    
    const [bookListData, setBookListData] = useState([]);
    const [listCounter, setListCounter] = useState(0)
    

    useEffect(() => {
      fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then((data) => setBookListData(data))
        // .then(() => alert("The list is set"))
        .then(console.log('this is the bookList from the useEffect in Home.js: ', bookListData))
  
    }, [])

    return  (
        <header>
            <div>
                <h3>
                    Home.js
                    <div>
                    <BookList bookListData={bookListData} listCounter={listCounter}/>
                    </div>
                </h3>

            </div>
        </header>
    )
}

export default Home
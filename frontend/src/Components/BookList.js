import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import Home from './Home';



function BookList(props) {
    const limitNumber = 2147483647;
    return (
        <div>
            <ul>
                {  
                    props.bookListData.map((item, index) => {
                        const checkoutStatus = (input) => {
                            if (input === false) {
                                return "Book is checked-in"
                                
                            } else if (input === true) {
                                return "Book is checked-out"
                                
                            } else {
                                return "not sure what you are talking about?"
                            }
                        }
                    
                        return(
                            <li>
                                <div>Title: {item.bookTitle}</div>
                                <div>Author: {item.Author}</div>
                                <div>ISBNNumber: {item.ISBNNumber}</div>
                                <div>checkoutStatus: {checkoutStatus(item.bookCheckedOut)}</div>
                                <Button 
                                href='./Books'
                                variant='contained'
                                color='primary' 
                                onClick={() => props.handleClick(item)}
                                >Details</Button>
                            </li>
                            )
                    })
                }
            </ul>
        </div>
    )
}

export default BookList;

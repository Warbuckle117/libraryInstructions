import Button from '@material-ui/core/Button'
import DataGrid from '@material-ui/data-grid'
import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';

import { } from '@material-ui/icons';

const BookListItem = require("./BookListItem")

const columns = [
    {
        field: 'Title',
        headerName: 'Title',
        type: 'text',
        minWidth: 100,
        editable: false
    },
    {
        field: 'Author',
        headerName: 'Author',
        type: 'text',
        minWidth: 100,
        editable: false
    },
    {
        field: 'ISBN',
        headerName: 'ISBN',
        type: 'number',
        minWidth: 100,
        editable: false
    },
    {
        field: 'Checkedout',
        headerName: 'Checkedout',
        type: 'boolean',
        minWidth: 100,
        editable: false
    }
]

function BookList(props) {
    console.log("this is props.bookListData in BookList components: ", props.bookListData)




    return (
        <div>
            <div>
                BookList.js
            </div>

            <ul>
                {
                    props.bookListData.map((item, index) => {
                        <BookListItem item={item} key={index} listCounter={props.listCounter}/>
                    })
                }
            </ul>
        </div>
    )
}

export default BookList;




{/* <Grid container>
<Grid>
    <Grid className={bookListData}>
        <DataGrid
        rows={rows}
        rowHeight={25}
        columns={columns}
        disableColumnMenu={false}
        />
    </Grid>
</Grid>
</Grid> */}







// function BookList(props) {
//     
//          const bookListItem = props.bookListData;
//          const listBookItems = bookListItem.map((bookListItem) =>
//                  <li key>{bookListItem.string()}
//                          {bookListItem}
//                          </li>
//              );
//     return (
//          <ul>{listBookItems}</ul>
//              );
//              }
//             
//            ReactDOM.render(
//              <BooksNshii bookListItem={bookListItem} />,
//              document.getElementByID('root')
//                          );
//
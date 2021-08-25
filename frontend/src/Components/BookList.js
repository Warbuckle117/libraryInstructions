// import Button from '@material-ui/core/Button'
// import DataGrid from '@material-ui/core/DataGrid'
// import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
// import {} from '@material-ui/icons';

const BookListItem  = require("./BookListItem")

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
    // console.log("this is props.bookListData in BookList components: ", props.bookListData)
    

    return (
        // <Grid container>
        //     <Grid>
        <div>
            <ul>
                {
                    props.bookListData.map((item, index) => {
                    <BookListItem item={item} key={index} />
                })
                }
            </ul>
        </div>

    )
}

export default BookList;


        //     </Grid>
        //     <Grid className={bookListData}>
        //         <DataGrid
        //         rows={rows}
        //         rowHeight={25}
        //         columns={columns}
        //         disableColumnMenu={false}
        //         />
        //     </Grid>
        // </Grid>







        
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
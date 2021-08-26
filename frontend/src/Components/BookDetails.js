import App from '../App'

function BookListItem(props) {
    console.log("this is the props of BookListItem")
    // console.log("At least the BookListItem is rendering")
    const checkoutStatus = props.App;
    const author = props.item.Author;
    const bookTitle = props.item.bookTitle;
    const isbnnumber = props.item.ISBNNumber;
    const key = props.key;
    const dueIn = props.App
    const userId = props.App

    //console.log(`bookListItem ${props.item}: `, props.item)
    


    return (
        <Grid container>
            <Grid>
                Item number:
                {key}
            </Grid>
            <Grid>
                Title
                {bookTitle}
            </Grid>
            <Grid>
                Author
                {author}
            </Grid>
            <Grid>
                ISBNNumber
                {isbnnumber}
            </Grid>
            <Grid>
                bookCheckedOut
                {checkoutStatus}
            </Grid>
            <Grid>
                Due In Date
                {dueIn}
            </Grid>
            <Grid>
                Checked Out To
                {userId}
            </Grid>
        </Grid>
    );
}


export default BookListItem;
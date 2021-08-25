function BookListItem (props) {
    // console.log("At least the BookListItem is rendering")
    const checkoutStatus = props.item.bookCheckedOut;
    const author = props.item.Author;
    const bookTitle = props.item.bookTitle;
    const isbnnumber = props.item.ISBNNumber;
    const key = props.key;

    return(
        <li>
            {key}
            <div>
                Title {bookTitle}
            </div>
            <div>
                Author {author}
            </div>
            <div>
                ISBNNumber {isbnnumber}
            </div>
            <div>
                bookCheckedOut 
                { 
                    () => {
                        if (checkoutStatus === false){
                            return "not today junior"
                        } else if (checkoutStatus === true) {
                            return "it's your lucky day"
                        } else {
                            return "not sure what you are talking about?"
                        }
                    }
                }
            </div>
            
        </li>
    );
}


export default BookListItem;
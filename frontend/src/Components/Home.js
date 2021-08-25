import logo from '../logo.svg';
import BookList from './BookList';


function Home (props) {
    console.log("this is props.bookListData in Home components: ", props.bookListData)

    return  (
        <header>
            <div>
                <h3>
                We broke it, yay
                </h3>
                <div>
                <BookList bookListData={props.bookListData} />
                </div>
            </div>
        </header>
    )
}

export default Home
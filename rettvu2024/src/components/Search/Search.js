
import { Link, useLocation } from 'react-router-dom';
import "./Search.css"

const Search = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword');

    console.log(keyword);

    return (
        <div className="Search">

        </div>
    )
}

export default Search;
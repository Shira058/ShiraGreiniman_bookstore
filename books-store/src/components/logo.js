import { Link } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa"

export default function Logo(props) {
    return (
        <Link to="/home">
            <img src="https://i.pinimg.com/564x/95/f8/58/95f8588d6469a16271ea2d2fad419d00.jpg" width="200rem"></img>
        </Link>

    )
}
import { Link } from "react-router-dom";

const Header =() =>{
    return(
        <div className="flex p-5 bg-blue-600 shadow fixed top-0 w-full" >
            <h2 className="text-xl font-bold mr-6 text-white">TaskLab</h2>
            <ul className="flex gap-6 text-white text-lg">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Header;
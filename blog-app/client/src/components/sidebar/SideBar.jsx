import "./sidebar.css"
import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"



export default function SideBar() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        }
        getCats()
    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://media-exp1.licdn.com/dms/image/C4D03AQERhF08uD0ITQ/profile-displayphoto-shrink_400_400/0/1662887533228?e=1673481600&v=beta&t=57XNLxxE2UZtAVdK2woABYerswbjffNAUR7Egx675Xs" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse at numquam. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    {
                        cats.map(p => (
                             <Link className="link" to={`/?cat=${p.name}`}>
                                <li className="sidebarListItem"> {p.name} </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="topIcon fa-brands fa-facebook-f"></i>
                    <i className="topIcon fa-brands fa-twitter"></i>
                    <i className="topIcon fa-brands fa-pinterest"></i>
                    <i className="topIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

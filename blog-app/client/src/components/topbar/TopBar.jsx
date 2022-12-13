import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
 
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user,dispatch } = useContext(Context);
    
   const PF= "http://localhost:5000/images/"
    const handleLogout=()=>{
       dispatch({type:"LOGOUT"})
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-f"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>


            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/WRITE" >WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                         {user&&"LOGOUT"} 
                    </li>
                </ul>

            </div>
            <div className="topRight">
               
                {
                    user ? (
                       user.profilePic ? (<Link to="/settings">
                            <img className="topImg" src={PF+user.profilePic} alt="" />
                        </Link>) : <Link to="/settings" className="link"><p>settings</p></Link>)
                        : <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li> 
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                }
              
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}

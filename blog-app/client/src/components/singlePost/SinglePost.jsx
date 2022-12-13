import "./singlepost.css"
import { useLocation } from "react-router"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import {Context} from "../../context/Context"


export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context);
    const [title,setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode,setupdateMode]=useState(false)

    useEffect(() => {
       const  getPost = async () => {
           const res = await axios.get("/posts/" + path)
           setPost(res.data)
           setTitle(res.data.title)
           setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path,{data:{username:user.username}})
            setupdateMode(false)
        } catch (error) {
            
        }
        
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {username:user.username, title, desc })
            window.location.reload()
        } catch (error) {

        }
    }
    
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && (
                        <img src={PF+post.photo} alt="" className="singlePostImg" />
                    )
                }{
                    updateMode ? <input className="singlePostTitleInput" type="text" value={title} onChange={e => {
                        setTitle(e.target.value)
                    }} autoFocus/>:
                
                
                <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => {
                                setupdateMode(true)
                        }}></i>
                        <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                    </div>
                    )}
                    
                </h1>}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                        
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? <textarea className="singlePostDescInput" type="text" value={desc} onChange={e => {setDesc(e.target.value)

                }} /> : <p className="singlePostDesc">
                    {desc}
                </p>}
                {
                    updateMode && <button className="singlePostButton" onClick={handleUpdate}  >Update</button>
            }
                

            </div>
        </div>
    )
}

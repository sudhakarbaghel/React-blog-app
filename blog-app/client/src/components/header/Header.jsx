import "./header.css"

export default function Header() {
  return (
      <div className='header'>
          <div className="headerTitles">
              <span className="headerTitleSm">React & Node</span>
              <span className="headerTitleLg">Blog</span>
          </div>
          <img className="headerImg" src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
  )
}

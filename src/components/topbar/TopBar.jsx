import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> <a href="accueil">HOME</a></li>
                    <li className="topListItem"><a href="Posts">ABOUT</a></li>
                    <li className="topListItem"><a href="Settings">PROFILE</a></li>
                    <li className="topListItem"><a href="Write">WRITE</a></li>
                    <li className="topListItem"><a href="Login">LOGOUT</a></li>
                </ul>
            </div>
            <div className="topRight">
                
                <img
                className="topImg" 
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt=""
                 />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    ) 
}
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="SinglePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" 
             className="singlePostImg" 
             />
            <h1 className="singlepostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Auteur: <b>Omar</b></span>
                <span className="singlePostdate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam quibusdam accusamus 
                perspiciatis ab pariatur, rerum magni asperiores cum dolorem beatae sequi laborum quo sit omnis.
                Ex in distinctio aspernatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam quibusdam accusamus 
                perspiciatis ab pariatur, rerum magni asperiores cum dolorem beatae sequi laborum quo sit omnis.
                Ex in distinctio aspernatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam quibusdam accusamus 
                perspiciatis ab pariatur, rerum magni asperiores cum dolorem beatae sequi laborum quo sit omnis.
                Ex in distinctio aspernatur!
            </p>
        </div>
    </div>
  )
}

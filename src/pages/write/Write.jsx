import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="writeImg"/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Racontez votre histoire" type="text" className="writeInput writeText"></textarea>
            </div>
            <div className="writeSubmit">publier</div>
        </form>
    </div>
  )
}

import style from "./Postscard.module.css"


function Postscard({ title, description }) {
    return (
        <div>
            <div className="imgcont">
                <img src="/425865.jpg" alt="" />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <button className={style.btn}>Bottone</button>
        </div>
    )
}

export default Postscard;
import style from "./AppMain.module.css"

function AppMain() {
    return (
        <main className={style.main}>
            <div className={`${style.cont} container`}>
                <div className={style.radius}>
                    <img className={style.radius2} src="/425865.jpg" alt="" />
                    <div className={style.padding}>
                        <h4>Titolo del post</h4>
                        <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi id sapiente. Natus officiis, quas repudiandae sunt quis ipsum ipsam illum maxime sit numquam debitis quia! Ad optio consequatur maiores.</p>
                        <button className={style.btn}>Leggi di piu</button>
                    </div>
                </div>
            </div>
            <br /><br />
        </main>
    )
}

export default AppMain;
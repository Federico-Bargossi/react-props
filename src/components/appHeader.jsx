import style from "./AppHeader.module.css";

function AppHeader() {
    return (
        <header className={`${style.header} mb-1`}>
            <div className="container">
                <h1 className={style.h1}>Il mio blog</h1>
            </div>
        </header>
    )
}

export default AppHeader;
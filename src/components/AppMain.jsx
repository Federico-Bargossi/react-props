import style from "./AppMain.module.css"
import posts from "./data/data"
import Postscard from "./postscard"

function AppMain() {
    return (
        <main>
            <div className="container">
                <div className={style.row}>
                    {posts.map((curePost) => (
                        <div className={style.col}>
                            <Postscard 
                            title={curePost.title}
                            description={curePost.content}
                            />
                        </div>
                    ))}

                </div>
            </div>
            <br /><br />
        </main >
    )
}

export default AppMain;
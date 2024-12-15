import style from "./AppMain.module.css"
import posts from "./data/data"
import Postscard from "./postscard"



const printPosts = () => {
    return (
        <div className={style.row}>
            {posts.map(post => {
                // Mostra solo i post che hanno la proprietà "published" impostata su true
                return post.published ? (
                    <div className={style.col} key={posts.id}>
                        <Postscard title={post.title} description={post.content} id={post.id} />
                    </div>
                ) : null;

            })}
        </div>
    );
}

function AppMain() {
    return (
        <main>
            <div className="container">
                    {printPosts()}
            </div>
            <br /><br />
        </main >
    )
}

export default AppMain;
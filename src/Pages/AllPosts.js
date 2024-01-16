import useFetch from "../CustomHooks/useFetch.js";
import PostCard from "../Components/PostCard.js";

export default function AllPosts() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div className="container">
            <h1>All Posts</h1>
            <div className="post-cards-container">
                {data && data.map((item) => {
                    return (
                        <PostCard item={item}/>
                    );
                })}
            </div>
        </div>
    );
}
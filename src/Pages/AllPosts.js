import useFetch from "../CustomHooks/useFetch.js";

export default function AllPosts() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div className="post-cards-container">
            {data && data.map((item) => {
                return (
                    <div key={item.id} className="post-card">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                );
            })}
        </div>
    );
}
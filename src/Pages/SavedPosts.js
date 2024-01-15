export default function SavedPosts() {
    let keys = Object.keys(localStorage);
    
    return (
        <div className="post-cards-container">
            {keys.map(key => {
                return (
                    <div key={key} className="post-card">
                        <h3>{key}</h3>
                        <p>{localStorage.getItem(key)}</p>
                    </div>
                );
            })}
        </div>
    );
}
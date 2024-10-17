export default function Post({post}){
    console.log(post);

    const {title, userId, id, body} = post;

    const postStyle = {
        margin: "20px",
        padding: "20px",
        border: "2px solid steelblue",
        borderRadius: "20px",
    }
    
    return(
        <div style={postStyle}>
            <h3>Title: {title} </h3>
            <p><small>UserId: {userId} </small></p>
            <p><small>Id: {id} </small></p>
            <p> {body} </p>
        </div>
    )
}
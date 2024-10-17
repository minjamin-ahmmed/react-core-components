import './user.css'
export default function User ({user}) {

    const {name, username, email} = user
    console.log(user.address);
    const {street, suite, city, zipcode} = user.address
    
    return(
        <div className="user">
            <h5>Name: {name} </h5>
            <p><small>UserName: {username} </small></p>
            <p><small>Email: {email} </small></p>


            <p><small>Address: {street} {suite} {city} {zipcode} </small></p>
        </div>
    )
}
import User from "./User/User"


export default ({
    users
}) => {


    const renderUsers = users.map( user => (
        <User {...user} key={ user.id }/>
    ))


    return (
        <div>
            <h4>
                Users
            </h4>
            <div>
                { renderUsers }
            </div>
        </div>
    )


}
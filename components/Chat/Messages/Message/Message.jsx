export default ({
    id,
    message,
    user
}) => (
    <div className="Message">
        <div className="User">
            <div className="name">
                {user.username}
            </div>
        </div>
        <div className="text">
            {message}
        </div>
    </div>
)
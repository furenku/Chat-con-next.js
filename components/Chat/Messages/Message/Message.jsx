export default ({
    id,
    message,
    user
}) => (
    <div className="Message">
        <div className="User">
            <div className="name">
                <strong>
                    {user.username}
                </strong>
            </div>
        </div>
        <div className="text">
            {message}
        </div>
    </div>
)
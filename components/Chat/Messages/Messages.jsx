import Message from "./Message/Message"

export default ({
    messages
}) => {

    const renderMessages = messages.map( message => (
    <Message {...message} key={messages.id}/>))

    return (
        <div>
            <h4>
                Messages
            </h4>
            <div>
                {renderMessages}
            </div>
        </div>
    )


}
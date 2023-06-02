import styles from "./Chat.module.css"

import Messages from "./Messages/Messages"
import Users from "./Users/Users"

import Compose from "./Compose/Compose"


export default ({ users, messages, send }) => {

    return(
        <div className={ `Chat ${styles.Chat}` }>
            <div>
                <Users users={users}/>
            </div>
            <div>
                <Messages messages={ messages }/>
            </div>

            <footer>
                <Compose users={ users } send={ send }/>
            </footer>
        </div>
    )
}
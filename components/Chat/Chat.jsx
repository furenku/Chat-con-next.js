import styles from "./Chat.module.css"

import Messages from "./Messages/Messages"
import Users from "./Users/Users"

import Compose from "./Compose/Compose"


export default ({ users, messages }) => {

    return(
        <div className={ `Chat ${styles.Chat}` }>
            <aside>
                <Users users={users}/>
            </aside>
            <section>
                <Messages messages={ messages }/>
            </section>

            <footer>
                <Compose users={ users }/>
            </footer>
        </div>
    )
}
import Messages from "./Messages/Messages"
import Users from "./Users/Users"


const messages = [
    {
        "id": 1,
        "username": "foo"
    },
    {
        "id": 2,
        "username": "bar"
    },
    {
        "id": 3,
        "username": "xyz"
    },
    {
        "username": "newuser",
        "id": 4
    },
    {
        "username": "newuser",
        "id": 5
    },
    {
        "username": "newuser",
        "id": 6
    },
    {
        "username": "newuser",
        "id": 7
    },
    {
        "username": "newuser",
        "id": 8
    }
]

const users = [
    [
    {
        "id": 1,
        "username": "foo"
    },
    {
        "id": 2,
        "username": "bar"
    },
    {
        "id": 3,
        "username": "xyz"
    },
    {
        "username": "newuser",
        "id": 4
    },
    {
        "username": "newuser",
        "id": 5
    },
    {
        "username": "newuser",
        "id": 6
    },
    {
        "username": "newuser",
        "id": 7
    },
    {
        "username": "newuser",
        "id": 8
    }
]
]

import { useState, useEffect } from "react"

export default () => {

    const [ users, setUsers ] = useState([])
    const [ messages, setMessages ] = useState([])
    
    //inicializacion
    useEffect(
        () => {
            getData()
        },
        []
    )

    const getData = async () => {
        await getUsers()
        await getMessages()
    }
    
    const getUsers = async () => {
        const f = await fetch("http://localhost:3333/users")
        const result = await f.json()
        setUsers(result)
    }
    
    const getMessages = async () => {
        const f = await fetch("http://localhost:3333/messages")
        const result = await f.json()
        setMessages(result)
    }

    
    return(
        <div className="Chat">
            <div>
                <Users users={users}/>
            </div>
            <div>
                <Messages messages={ messages }/>
            </div>
        </div>
    )
}
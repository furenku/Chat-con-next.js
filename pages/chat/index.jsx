import Chat from "../../components/Chat/Chat"

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

    useEffect( ()=> {
        console.log("cambiaron users", users.length )
    }, [ users ])

    useEffect( ()=> {
        console.log("cambiaron messages", messages.length )
    }, [ messages ])


    const getData = async () => {
        try {

            await getUsers()
            await getMessages()

        } catch( err ) {

            console.error("get chat data:", err.message );

        }
    }
    
    const getUsers = async () => {

        try {
            const f = await fetch( "api/chat/users" )
            const result = await f.json()
            setUsers(result)
        } catch( err ) {

            throw new Error("Usuarios: " + err.message );

        }

    }
    
    const getMessages = async () => {
        try {
            const f = await fetch("api/chat/messages")
            const result = await f.json()
            setMessages(result)
        } catch( err ) {

            throw new Error("Mensajes: " + err.message );

        }
    }

    return (
        <Chat users={users} messages={messages}/>
    )
}

// https://github.com/furenku/Chat-con-next.js
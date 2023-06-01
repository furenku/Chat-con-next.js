import { useState } from "react"

export default ({ users, send }) => {

    
    const [ message, setMessage ] = useState("")
    const [ user, setUser ] = useState()


    let renderUsers = users.map( u => (
        <option value={ u.id } key={ "user_option_" + u.id }>
            { u.username }
        </option>
    ))

    renderUsers = [
        <option selected>Elige un usuario:</option>,
        ...renderUsers        
    ]


    const changeMessage = event => {

        const text = event.target.value


        setMessage( text )

    }
    
    const changeUser = event => {

        setUser()
        
        const user = event.target.value

        const userIds = users.map( u => (u.id).toString() )

        if( userIds.includes( user ) ) {

            setUser( user )
            
        }
    }


    const doSend = () => {
        
        // prevenir llamada a función si no existe
        if( typeof send == "function") {

            send({
                user,
                message
            })            
        
        }
        
        setMessage("")

    }

    return (
        <div>

            <select name="" id="" onChange={ changeUser }>
                { renderUsers}
            </select>
            
            <input value={ message } onChange={ changeMessage }/>
            
            <button onClick={ doSend } disabled={ ! (user && message) }>
                Enviar
            </button>

        </div>
    )

}
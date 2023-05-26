export default async function handler(req, res) {

    try {

    
        const f = await fetch(
            "http://localhost:4444/messages"
        )
        const result = await f.json()
    
        const messages = []

        for( const message of result ) {

            const f = await fetch(
                `http://localhost:4444/users/${ message.user }`
            )
            const user = await f.json()

            // actualizar mensaje con usuario completo:
            const messageWithUser = {
                ...message,
                user
            }

            messages.push( messageWithUser )


        }

        console.log( "Se obtuvieron mensajes:", messages.length )

        res.status(200).json( messages );

    } catch( err ) {

        console.error( "api/chat/messages:", err );

        res.status(500).send("Error del servidor");

    }


}
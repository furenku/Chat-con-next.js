export default async function handler(req, res) {


    if( req.method == "GET") {

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


    if( req.method == "POST" ) {


        try {


            const body = JSON.parse(req.body)

            
            const f = await fetch(
                "http://localhost:4444/messages",
                {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )

            const result = await f.json()
        
            console.log( "Se envió mensaje", result )

            res.status(200).json( result );

        } catch( err ) {

            console.error( "POST api/chat/messages:", err );

            res.status(500).send("Error del servidor");

        }

    }

}
export default async function handler(req, res) {

    try {

    
        const f = await fetch(
            "http://localhost:4444/users"
        )
        const result = await f.json()
    
        const users = result

        console.log( "Se obtuvieron usuarios:", users.length )

        res.status(200).json( users );

    } catch( err ) {


        console.error( "api/chat/users:", err );


        res.status(500).send("Error del servidor");


    }


}
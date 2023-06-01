export default ({ users }) => {


    const renderUsers = users.map( u => (
        <option value={ u.id } key={ "user_option_" + u.id }>
            { u.username }
        </option>
    ))


    return (
        <div>

            <select name="" id="">
                { renderUsers}
            </select>
            
            <input/>
            
            <button>
                Enviar
            </button>

        </div>
    )

}
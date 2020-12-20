import React, { useState } from 'react';

const Client = (props) => {
    const [nameClient, setNameClient] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.modifyName({key:"client", value:nameClient});
    }

    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" name="client" onChange={(e)=> setNameClient(e.target.value)}/>
        <input type="submit"/>
        </form>
    )
        
}


export default Client;
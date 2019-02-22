import React from 'react'

export default function House(props) {
    console.log(props)
    const {name, address, state, zip, deleteHouse, id} = props


    
    return (
        <div>
            <ul>
                <h3>{name}</h3>
                <h3>{address}</h3>
                <h3>{state}</h3>
                <h3>{zip}</h3>
            </ul>
            <button onClick={() => deleteHouse(id)}>Delete</button>
        </div>
    )
}
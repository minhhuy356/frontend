import React, { useState } from "react";

const AddInfor = (props) => {

    // const [User, setUser] = useState({
    //     name: 'Huy',
    //     address: 'Hoi An',
    //     age: 21,
    // })
    const [name, setName] = useState('Huy')
    const [address, setAddress] = useState('Hoi An')
    const [age, setAge] = useState(21)

    const handleOnchangeName = (event) => {
        setName(event.target.value)
    }


    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
    }



    const handleOnSubmid = (event) => {
        event.preventDefault();
        props.handleAddUser({
            id: Math.floor(Math.random() * 100),
            name: name,
            age: age,
        })
    }


    return (
        <div>
            My name is {name} and I'm from {address} // Age {age}
            <form onSubmit={(event) => { handleOnSubmid(event) }}>
                <input className="input" type="text"
                    onChange={(event) => { handleOnchangeName(event) }} />
                <input className="input" type="text"
                    onChange={(event) => { handleOnchangeAge(event) }} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddInfor;
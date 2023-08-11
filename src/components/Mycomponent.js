import React, { useState } from "react";
import AddInfor from "./AddInfor";
import DisplayInfor from "./DisplayInfor";
const MyComponent = (props) => {
    const [listUser, setlistUser] = useState([
        { id: 1, name: "Huy", age: "21" },
        { id: 2, name: "Vy", age: "16" },
        { id: 3, name: "Vu", age: "18" }
    ])


    const handleAddUser = (userObject) => {
        setlistUser([...listUser, userObject])
    }

    const handleDeleteUser = (userId) => {
        let listUserWasDelete = listUser
        listUserWasDelete = listUserWasDelete.filter(item => item.id !== userId)
        setlistUser([...listUserWasDelete])
    }

    const ojb = true
    return (
        <>
            {JSON.stringify(ojb)}
            <AddInfor handleAddUser={handleAddUser} />
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
        </>
    )
}

export default MyComponent;
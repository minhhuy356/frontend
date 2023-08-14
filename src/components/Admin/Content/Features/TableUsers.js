import { useEffect } from "react"
import { useState } from "react"
import { getListUsers } from "../../../../services/ApiService"

const TableUsers = () => {

    const [listUsers, setListUsers] = useState([])

    useEffect(async () => {
        fetchListUsers()
    }, [])

    const fetchListUsers = () => {
        return new Promise(async () => {
            let res = await getListUsers()
            if (res.EC === 0) {
                setListUsers(res.DT)
            }
        })
    }


    return (
        <>
            {listUsers && listUsers.length > 0 ? <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Image</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0
                        && listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.role}</td>
                                    <td>{item.image}</td>
                                    <td>
                                        <button className="btn btn-dark bd-white">View</button>
                                        <button className="btn btn-dark bd-white mx-3">Update</button>
                                        <button className="btn btn-dark bd-white">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table> : <div className="title-no-user"><h1> <strong>Currently No User</strong></h1></div>}
        </>
    )

}

export default TableUsers
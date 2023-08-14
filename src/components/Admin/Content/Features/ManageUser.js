import { useState } from "react"
import ModalCreateUser from "../ModalCreateUser"
import './scss/ManageUser.scss'
import { FaRegAddressCard } from 'react-icons/fa'
const ManageUser = (props) => {

    const [showModelCreateUser, setShowModelCreateUser] = useState(false)



    return (
        <div className="manage-user-container">
            <div className="user-title">
                <h1><strong>Manage Users</strong></h1>
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn" onClick={() => setShowModelCreateUser(true)}>
                        <FaRegAddressCard />Add new user
                    </button>
                </div>
                <div className="table-users-c">
                    table users
                </div>
                <ModalCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} />
            </div>
        </div>
    )
}
export default ManageUser
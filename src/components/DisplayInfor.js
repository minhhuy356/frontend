import React, { useEffect, useReducer, useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'
// class DisplayInfor extends React.Component {

//     render() {
//         const { listUser } = this.props
//         return (
//             <div className="display_infor_container">
//                 <img src={logo} />
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }}>{this.state.isShowUser ? "Hide list user" : "Show list user"}</span>
//                 </div>
//                 {this.state.isShowUser &&
//                     <>
//                         <div>{listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                                     <div>{user.name}</div>
//                                     <div>{user.age}</div>
//                                     <hr />
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>X</button>
//                                 </div>
//                             )
//                         })}</div>
//                     </>}
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    console.log('call me render')

    useState(() => {
        console.log('call me useState')
    })

    useEffect(() => {
        if (listUser.length === 0) {
            alert('you deleted all the user')
        }
        console.log('call me useEffect')
    }, [listUser]);

    return (
        <div className="display_infor_container">
            <img src={logo} />
            <div><span onClick={() => handleShowHideListUser()}>{isShowHideListUser ? "Hide List User" : "Show List User"}</span></div>
            {isShowHideListUser &&
                <>
                    <div>{listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                                <hr />
                                <button onClick={() => props.handleDeleteUser(user.id)}>X</button>
                            </div>
                        )
                    })}</div>
                </>}
        </div>
    )
}


export default DisplayInfor;
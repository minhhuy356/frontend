import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import axios from 'axios';
import { toast } from 'react-toastify';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setEmail('')
        setPassword('')
        setUserName('')
        setRole('User')
        setImage('')
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState("User");
    const [image, setImage] = useState();
    const [previewImage, setPreviewImage] = useState();

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let fileImage = URL.createObjectURL(event.target.files[0])
            setPreviewImage(fileImage)
            setImage(fileImage)
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async () => {
        //validate

        const isValidateEmail = validateEmail(email)
        if (email === "") {
            toast.error('Chưa nhập email')
            return
        }
        if (!isValidateEmail) {
            toast.error('Email sai định dạng')
            return
        }
        if (password === '') {
            toast.error('Chưa nhập password')
            return
        }
        if (userName === '') {
            toast.error('Chưa nhập tên')
            return
        }



        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('userName', userName);
        data.append('role', role);
        data.append('image', image);

        let res = await axios.post('http://localhost:8081/api/v1/participant', data)
        if (res.data && res.data.EC === 0) {
            toast.success('Thêm người dùng thành công')
            handleClose()
        }
        if (res.data && res.data.EC !== 0) {
            toast.error('Email ' + email + ' đã tồn tại')
        }
    }



    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} size='xl'
                className='modal-add-user' backdrop='static' estyle={{ display: 'flex' }}>

                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">User name</label>
                        <input type="text" className="form-control" id="inputCity"
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select id="inputState" className="form-select"
                            onChange={(event) => setRole(event.target.value)}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label label-upload" htmlFor='inputUpload'>
                            <FcPlus /><span>Upload File Image</span></label>
                        <input type='file'
                            hidden id='inputUpload'
                            onChange={(event) => handleUploadImage(event)}
                        />
                    </div>
                    <div className="col-md-12 img-preview">
                        {previewImage ? <img src={previewImage} value={image} /> : <span>Preview Img</span>}
                    </div>
                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalCreateUser
import axios from "../utils/axiosCustomize";

const postCreateUser = (email, password, userName, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('userName', userName);
    data.append('role', role);
    data.append('image', image);

    return axios.post('participant', data)
}

const getListUsers = () => {

    return axios.get('participant/all')
}

export { postCreateUser, getListUsers } 
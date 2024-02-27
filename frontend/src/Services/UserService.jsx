import axios from "axios";
const UserService = {}

UserService.register = async function (data) {

    return await axios.post('http://localhost:6000/users/signup' , data)


}
UserService.signin = async function ( data) {
    
    return await axios.post('http://localhost:6000/users/signin' , data)
}

export default UserService;     
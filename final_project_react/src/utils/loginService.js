import axios from "axios";

const handleLogin = (reqBody) => {
    axios.post('http://localhost:5000/login', reqBody).then(res => {
        alert("logged in")
    }).catch(err => {
        alert("NOT logged in")
    })
}
export default handleLogin;
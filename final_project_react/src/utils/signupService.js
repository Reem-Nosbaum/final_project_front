import axios from "axios";

const handleSignup = (reqBody) => {
    axios.post('http://localhost:5000/signup', reqBody).then(res => {
        alert("signup in")
    }).catch(err => {
        alert("NOT signup in")
    })
}
export default handleSignup;
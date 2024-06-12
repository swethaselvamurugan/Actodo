import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signup(props){
    var navigate = useNavigate()
    var users = props.users
    var setUsers = props.setUsers
    var[username, setUsername] = useState("")
    var[password, setPassword] = useState("")
    var[cPassword, setCpassword] = useState("")
    function handleEusername(event){
        setUsername(event.target.value)
    }
    function handleEpassword(event){  
        setPassword(event.target.value)
    }
    function handleECpassword(event){
        setCpassword(event.target.value)
    }
    function addUsers(){
        setUsers([...users, {username: username, password: password}])
        navigate("/")
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up here :)</p>
                <div className="flex flex-col my-2 gap-2">
                    <input onChange={handleEusername} type="text" placeholder="username" className="w-52 p-1 border-black border rounded-md bg-transparent"></input>
                    <input onChange={handleEpassword} type="text" placeholder="password" className="w-52 p-1 border-black border rounded-md bg-transparent"></input>
                    <input onChange={handleECpassword} type="text" placeholder="confirm password" className="w-52 p-1 border-black border rounded-md bg-transparent"></input>
                    <button onClick={addUsers} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>
                    <p>Already have an account? <Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup
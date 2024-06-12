import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(props){
    var navigate = useNavigate()
    var[eUsername, setEusername] = useState("")
    var[ePassword, setEpassword] = useState("")
    var[rUser, setRuser] = useState(true)
    var users = props.users
    var setUsers = props.setUsers
    var userfound = false
    
    function handleUinput(event){
        setEusername(event.target.value)
    }
    function handleUpassword(event){
        setEpassword(event.target.value)
    }
    function checkUsers(){
        users.forEach(function(item){
            if(item.username === eUsername && item.password === ePassword){
                console.log("successfull")
                userfound = true
                navigate("/landing", {state:{user: eUsername}})
            }
        })
        if(userfound === false){
            console.log("login failed")
            setRuser(false)
        }
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    rUser? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up before you Login!!</p>
                }
                
                <div className="flex flex-col my-2 gap-2">
                    <input onChange={handleUinput} type="text" placeholder="username" className="w-52 p-1 border-black border rounded-md bg-transparent"></input>
                    <input onChange={handleUpassword} type="text" placeholder="password" className="w-52 p-1 border-black border rounded-md bg-transparent"></input>
                    <button onClick={checkUsers} className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
                    <p>Don't have an account? <Link className="underline" to={"/signup"}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}
 export default Login
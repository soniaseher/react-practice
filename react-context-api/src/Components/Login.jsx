import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setpassword] = useState('');
   const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
         e.preventDefault();
         setUser({username, password});
  }
  return (
    <div> 
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/><br></br>
      <input type = "text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="password"/><br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
import { useState } from "react";
import UserRegistered from "../UserRegistered/UserRegistered";

const RegistrationForm = () => {
 
  const [user, setUser] = useState({
    'id': Date.now(),
    'fullName': '',
    'email': '',
    'password': '',
  
  })
  

  const [registeredUser, setRegisteredUser] = useState([])
  
 
  const handleAddUser = (user) => {
    
    setUser(user)
    }

  const handleRegisterUser = () => {
      if(user.fullName == "" || user.email == "" || user.password == ""){
        return 
      }
    setRegisteredUser([...registeredUser, user])

  
    }

  const handleRemove = () => {
    
      setRegisteredUser([])
    
  }

 
  return (
    <>
      <form method="submit">
        <label htmlFor="fullName">Full Name</label>
        <input type="text"  name="fullName" id="fullName" required  
        value={user.fullName} 
        onChange={(e) => handleAddUser({ ...user, fullName: e.target.value })} />
        <label htmlFor="email">Email</label>
        <input type="email"  name="email" id="email" required
         value={user.email} 
         onChange={(e) => handleAddUser({ ...user, email: e.target.value })} />
        <label htmlFor="password">Password</label>
        <input type="password"  name="password" id="password" required
         value={user.password} onChange={(e) => handleAddUser({ ...user, password: e.target.value })} />
        <button onClick={ handleRegisterUser }>Add user</button>  
      </form>

      
      <UserRegistered registeredUser={registeredUser}
      handleRemove = {handleRemove}
 /> 


    </>
  )
}

export default RegistrationForm


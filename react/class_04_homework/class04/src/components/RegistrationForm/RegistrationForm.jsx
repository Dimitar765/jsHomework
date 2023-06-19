import { useState } from "react";
import UserRegistered from "../UserRegistered/UserRegistered";
import { v4 as uuidv4 } from 'uuid';
import './style.css'
const RegistrationForm = () => {
 
  const [user, setUser] = useState({
    'id': uuidv4(),
    'fullName': '',
    'email': '',
    'password': '',
  
  })
  

  const [registeredUser, setRegisteredUser] = useState([])
  
 
  const handleAddUser = (user) => {
    
    setUser(user)
    }

  const handleRegisterUser = () => {
      if(user.fullName == "" || user.email == "" || user.password == "" || user.id == ""){
        return 
      }
    setRegisteredUser([...registeredUser, user]);
    setUser({
      id: uuidv4(),
      fullName: "",
      email: "",
      password: ""
    });

  
    }

  const handleRemove = () => {
    
      setRegisteredUser([])
    
  }

  
  return (
    <>
      <div className="container">
      <form method="submit" className="form">
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
         <div className="btn">
        <button onClick={ handleRegisterUser }>Add user</button>  
        </div>
      </form>

      <div className="removeBtn">
      <UserRegistered registeredUser={registeredUser}
      handleRemove = {handleRemove}
 /> 
      </div>
      </div>

    </>
  )
}

export default RegistrationForm


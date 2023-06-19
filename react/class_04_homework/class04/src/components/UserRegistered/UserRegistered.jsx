
// import RegistrationForm from "../RegistrationForm/RegistrationForm";
const UserRegistered = ({registeredUser, handleRemove}) => {

 


  return (
    <>
    <ol>
      {registeredUser.map((user) => (
        
      <li key={user.id}>Full Name: {user.fullName} email: {user.email} id:{user.id}</li>
      ))}
    
    </ol>
    <button onClick={handleRemove}>Delete users</button>
    </>

  )
};


export default UserRegistered;

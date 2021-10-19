import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebase from "../../../Hooks/useFirebase";



const Register = () => {
  const [isLogin,setIsLoging]=useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [error,setError]=useState('');
  const [password, setPasswowrd] = useState('');
  const {setUser,signInUsingGoogle}=useFirebase()

  const auth = getAuth();

  const handleNameInput = e => {
    setName(e.target.value)
}
const handleEmailInput = e => {
  setEmail(e.target.value)
}

const handlePasswordInput = e => {
  setPasswowrd(e.target.value)
}

const handleRegistration = e => {
  e.preventDefault();
  registers();
  if( password.length < 6) {
    return setError('please enter 6 characters long password');
    
  }
  if( password.length > 6) {
    return setError('');
    
  }
}

const registers=()=>{
  createUserWithEmailAndPassword(auth, email, password)
.then((result) => {
// Signed in 
setUser(result.user);
setUserName()
// ...
})
.catch((error) => {
setError(error.message);
});
}
const setUserName = () =>{
  updateProfile(auth.currentUser, {displayName: name})
   .then(result => { })   
}
const signin=()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    setUser(result.user);
    // ...
  })
  .catch((error) => {
  setError(error.message);
  });
}

const toggleLogin=(e)=>{
  setIsLoging(e.target.checked)
}
  return(
    <div className="container w-50 mx-auto mb-lg-5 p-5">
      <h1 className="text-primary">{isLogin ? 'Login':'Register'} Here</h1>
      <div className="bg-success p-4  rounded-4 ">

        <Form >        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {!isLogin && <Form.Control className="mb-4" type="name" onChange={handleNameInput} placeholder="Enter your name" required />}

            <Form.Control type="email" onBlur={handleEmailInput} placeholder="Enter email" required />
            <Form.Text className=" text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" onChange={handlePasswordInput} placeholder="Password" required />
            <label className="text-danger">{error}</label>
          </Form.Group>

          <Form.Group className="mb-3"  onClick={toggleLogin} controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Already Registered?" />
          </Form.Group>

          

        </Form>
        {isLogin? <button className="btn btn-primary" onClick={signin}>Sign In</button>: <button className="btn btn-warning" onClick={handleRegistration}>Register</button> }
         
      </div>


    <Button onClick={signInUsingGoogle} className="mt-3">Google Sign</Button>
    
  
    </div>
  )
};

export default Register;


 

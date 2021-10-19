import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPasswowrd] = useState('');
    const [isLogin, setIsLogIn] = useState(false);
    const [error, setError] = useState('');
    const { signInUsingGoogle } = useAuth();

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

    const toggleLogin = e => {
        setIsLogIn(e.target.checked)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(name,email, password)
        if( password.length < 6) {
          setError('please enter 6 characters long password');
          return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setError('Ensure string has two uppercase letter');
          return;
        }
        
        isLogin? processSignIn(email, password): prossesRegister(name, email, password);
      }

      const processSignIn =(email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(error => {
          setError(error.message);
        })
      }

      const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName: name})
         .then(result => { })   
      }
      const prossesRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, name, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError('')
          setUserName();
        })
        .catch((error) => {
          setError(error.message);
        })
      }
    return (
        <div className="container w-50 mx-auto mb-lg-5">
            <h1 className="text-primary">{isLogin ? 'Login':
        'Register'} Here</h1>
            <div className="bg-success p-4  rounded-4">
            <Form onSubmit={handleRegistration}>
            
  <Form.Group className="mb-3" controlId="formBasicEmail">

    {!isLogin && <Form.Control className="mb-4" type="name" onBlur={handleNameInput} placeholder="Enter your name" required />}

    <Form.Control type="email" onBlur={handleEmailInput} placeholder="Enter email" required />
    <Form.Text className=" text-white">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" onBlur={handlePasswordInput} placeholder="Password" required />
  </Form.Group>

  <Form.Group className="mb-3"  onChange={toggleLogin} controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Already Registered?" />
  </Form.Group>
  

  <Button variant="primary" type="submit">
  {isLogin? "Login": 'Register'}
  </Button>
  
</Form>
            </div>

            {isLogin &&<div>----- <h1>or</h1>-----</div>}
            {isLogin && <Button onClick={signInUsingGoogle}>Google Sign In</Button>}
            
        </div>
    );
};

export default Register;
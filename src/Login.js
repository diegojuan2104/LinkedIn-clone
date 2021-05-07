import React, { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import LinkedIn_img from "./images/LinkedIn.png";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";


function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");  
const [name, setName] = useState("");
const[profilePic, setProfilePic] = useState("");
const dispatch = useDispatch();

const loginToApp = (e) => {
  e.preventDefault();
  auth.signInWithEmailAndPassword(email, password).then(userAuth =>
    dispatch(login({
      email: userAuth.user.email,
      uid: userAuth.user.uid,
      displayName: userAuth.displayName,
      photoUrl: userAuth.photoURL
    }))
  ).catch((error) => alert(error))
}

const register = () => {
  if(!name){
    return alert("Please enter a full name!")
  }

  auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
    userAuth.user.updateProfile({
    displayName: name,
    photoURL: profilePic,
   }).then(() => {
    dispatch(login({
      email: userAuth.user.email,
      uid: userAuth.user.uid,
      displayName: name,
      photoUrl: profilePic
    }));
   }).catch((error) => alert(error))
  })
}

  return (
    <div className="login">
        <img
          src={LinkedIn_img}
          alt=""
        />

      <form action="">
            <input type="text" value={name}  onChange={e => setName(e.target.value)} placeholder="Fullname (required if registering)"/>
            <input type="text"  value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic url (optional)"/>
            <input type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button type="submit"  onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member? {' '} <span className="Login__register" onClick={register}>Register Now</span></p>
    </div>
  );
}

export default Login;

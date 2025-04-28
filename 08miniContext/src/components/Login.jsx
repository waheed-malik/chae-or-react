import React, { useState, useContext } from "react"; 
// React, useState (local state manage کرنے کے لیے) اور useContext (global context access کرنے کے لیے) import کر رہے ہیں۔

import UserContext from "../context/userContext"; 
// UserContext کو import کر رہے ہیں تاکہ ہم user کی information globally set کر سکیں۔

function Login() {
  // Local state: username اور password کو hold کرنے کے لیے
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");

  // Global context سے setUser function کو access کر رہے ہیں
  const { setUser } = useContext(UserContext);

  // Form submit handle کرنے کے لیے function
  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload کو روکتا ہے
    setUser({ username, password }); // userContext میں username اور password کو set کرتا ہے
  }

  return (
    <div>
      <h2>Login</h2>
      
      {/* Username input field */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // جب بھی typing ہو، username state update ہو
        placeholder="username"
      />
      {" "}
      {/* Password input field */}
      <input
        type="text"
        value={password}
        onChange={(e) => setPasssword(e.target.value)} // جب بھی typing ہو، password state update ہو
        placeholder="password"
      />
      
      {/* Submit button */}
      <button onClick={handleSubmit}>Submit</button> 
    </div>
  );
}

export default Login; 
// Login component کو export کر رہے ہیں تاکہ دوسری files میں use کر سکیں۔

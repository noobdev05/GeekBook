import React from "react";
import "./signup.css";

const signup = () => {
  return (
    <div>
      <form action="" class="container">
        <h1>Signup</h1>
        Username
        <div>
          <input type="text" size="50" />
        </div>
        Email address
        <div>
          <input type="text" />
        </div>
        Password
        <div>
          <input type="password" />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};
export default signup;

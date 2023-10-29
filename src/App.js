import React from "react";
import "./style.css";

const App = () => {
  return (
    <>
      <div class="login_form_container">
        <div class="login_form">
          <h2>Login</h2>
          <div class="input_group">
            <i class="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              class="input_text"
              autocomplete="off"
            />
          </div>
          <div class="input_group">
            <i class="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              class="input_text"
              autocomplete="off"
            />
          </div>
          <div class="button_group" id="login_button">
            <a>Submit</a>
          </div>
          <div class="fotter">
            <a>Forgot Password ?</a>
            <a>Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;

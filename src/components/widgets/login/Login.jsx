import { useState } from "react";
import "./Login.css";
import UsersDataBase from "../../utilities/UsersDataBase";

const Login = ({
  setCurrentUserName,
  setCurrentUserPicture,
  toggleModal,
  show,
  onFormSwitch,
  email,
  setEmail,
  pass,
  setPass,
  error,
  setError,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = UsersDataBase.find(
      (u) => u.email === email && u.password === pass
    );
    if (user) {
      setCurrentUserName(user.username);
      setCurrentUserPicture(user.img);
      toggleModal();

      // Redirect to the dashboard or perform some other action
    } else {
      setError("Details do not match");
      // Display an error message or perform some other action
    }
  };

  return (
    <div
      className={show ? "auth-form-container invisible" : "auth-form-container"}
    >
      <button onClick={toggleModal} className="closing-cross"></button>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="label-form" htmlfor="email">
          Email
        </label>
        <input
          className="input-form"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Your email"
          id="email"
          name="email"
        />
        <label className="label-form" htmlfor="password">
          Password
        </label>
        <input
          className="input-form"
          onChange={(e) => setPass(e.target.value)}
          type="password"
          value={pass}
          placeholder="Your password"
          id="password"
          name="password"
        />
        <button type="submit" className="btn-login">
          Log In
        </button>
      </form>
      {error != "" ? <div className="error">{error}</div> : ""}
      <button className="btn-link" onClick={() => onFormSwitch("Register")}>
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;

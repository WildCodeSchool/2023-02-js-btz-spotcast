import { useState } from 'react';
import './Login.css';
import UsersDataBase from '../../utilities/UsersDataBase';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleShow = () => props.setShow(!props.show);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = UsersDataBase.find(
      (u) => u.email === email && u.password === pass
    );
    if (user) {
      props.setCurrentUserName(user.username);
      props.setCurrentUserPicture(user.img);
      console.log('User found:', user);

      // Redirect to the dashboard or perform some other action
    } else {
      console.log('User not found');
      // Display an error message or perform some other action
    }
  };

  return (
    <div
      className={
        props.show ? 'auth-form-container invisible' : 'auth-form-container'
      }>
      <button onClick={handleShow} className="closing-cross"></button>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="label-form" htmlfor="email">
          Email
        </label>
        <input
          className="input-form"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@example.com"
          id="email"
          name="email"
        />
        <label className="label-form" htmlfor="password">
          Password
        </label>
        <input
          className="input-form"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />
        <button className="btn-login">Log In</button>
      </form>
      <button
        className="btn-link"
        onClick={() => props.onFormSwitch('Register')}>
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;

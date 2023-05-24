import { useState } from 'react';
import './Login.css';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleShow = () => props.setShow(!props.show);

  const handleSubmit = () => {
    // email.preventDefault();
    // console.log(email);
  };
  return (
    <div
      className={
        props.show ? 'auth-form-container invisible' : 'auth-form-container'
      }>
      <button onClick={handleShow} className="closing-cross"></button>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="label-form" htmlfor="name">
          Full name
        </label>
        <input
          className="input-form"
          value={name}
          name="name"
          id="name"
          placeholder="Full name"
        />
        <label className="label-form" htmlfor="email">
          Email
        </label>
        <input
          className="input-form"
          value={email}
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
      <button className="btn-link" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Log in here
      </button>
    </div>
  );
};

export default Register;

import { useState } from "react";
import "../App.css";
import FormInput from "./FormInput";
import nav from '../nav.png';
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../MainComponents/Footer";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate()

  const inputs = [
    {
      id: 1,
      class:'username',
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-30 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 10-30 characters and include at least 1 number",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{10,30}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem( 'username', document.querySelector('.username').value)
    navigate('/registered')
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <>
    <nav style={{justifyContent : 'space-around'}}>
        <img src={nav} alt="" />
        <Link to='/' style={{color : 'black'}}>Go Back</Link>
    </nav>

    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Sign Up</button>
      </form>
    </div>

    <Footer />
    </>
  );
};

export default Register;
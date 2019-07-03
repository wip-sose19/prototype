import React, { Component } from 'react';
import styled from 'styled-components';
import { loadDB } from '../lib/db';

const StyledLogin = styled.form`
  form {
    border: 3px solid #f1f1f1;
  }

  /* Full-width inputs */
  input[type='email'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  /* Set a style for all buttons */
  button {
    background-color: ${props => props.theme.primary};
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }

  /* Extra style for the cancel button (red) */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  /* Center the avatar image inside this container */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }

  /* Avatar image */
  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
  }

  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChnage = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const firebase = await loadDB();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('success');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <StyledLogin
        action="action_page.php"
        method="POST"
        onSubmit={this.onSubmit}
      >
        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={this.state.email}
              onChange={this.onChnage}
            />
          </label>

          <label htmlFor="password">
            <b>Password</b>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.onChnage}
            />
          </label>

          <button type="submit">Anmelden</button>
        </div>
      </StyledLogin>
    );
  }
}

export default Login;

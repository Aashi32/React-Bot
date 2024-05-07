import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;
    axios.post('http://127.0.0.1:5000/signup', { email, password })
      .then(function (response) {
        console.log(response);
        navigate('/');
      })
      .catch(function (error) {
        console.log(error, 'error');
        if (error.response.status === 401) {
          alert('Invalid credentials');
        }
      });
  }

  render() {
    return (
      <div className="signup-container">
        <h2>Create your account to get started</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />

          {this.state.error && (
            <p style={{ color: 'red' }}>{this.state.error}</p>
          )}

          <button type="submit">Create your account</button>
        </form>

        <div className="other-signup-options">
          <button type="button" className="google-button">
            <img src="./images/google-icon.png" alt="Google Icon" />
            <span>Sign up with Google</span>
          </button>
          <button type="button" className="facebook-button">
            <img src="./images/Facebook-icon.png" alt="Facebook Icon" />
            <span>Sign up with Facebook</span>
          </button>
          <button type="button" className="Email-button">
            <img src="./images/Email-icon.png" alt="Email Icon" />
            <span>Sign up with Email</span>
          </button>
        </div>

        <p>
          By signing up, you consent to YRH's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>

        <p>Need help? <button type="button">Contact support</button></p>
      </div>
    );
  }
}

export default SignUpForm;

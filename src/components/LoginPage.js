import { Component } from 'react';
import HomePage from './HomePage';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                isRemember: false
            },
            isValid: false,
            isLoggedIn: false
        };
    }
    handleChange = (event) => {
        this.setState((state) => {
          const { form } = state
          form[event.target.name] = event.target.value
          return { form }
        }, () => this.checkValidForm())
    }
    handleChangeCheckbox = () => {
        this.setState((state) => {
          const { form } = state
          form.isRemember = !form.isRemember
          return { form }
        }, () => this.checkValidForm())
    }
    checkValidForm = () => {
        const { email, password } = this.state.form
        const value = email && password
        this.setState({ isValid: value })
    }
      handleSubmit = () => {
        if (this.state.isValid){
          this.setState({ isLoggedIn: true })
        }
    }
    handleLogOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render () {
        const { isLoggedIn, form } = this.state
        if (isLoggedIn) {
            return (
                <HomePage onLogOut={this.handleLogOut} />
            )
        }
        return (
            <div className="container">
                <div className="form-signin">
                    <form>
                        <img 
                            className="img" 
                            src="https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg"
                            alt="" width="72" height="72" 
                        />
                        <h1>Please Login</h1>
                        <div className="form-floating">
                            <label>Email address:</label><br></br>
                            <input 
                                className="form-control email" 
                                type="email" name="email" 
                                placeholder="name@example.com" 
                                value={form.email} 
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form-floating">
                            <label>Password:</label><br></br>
                            <input 
                                className="form-control password" 
                                type="password" name="password" 
                                placeholder="Password" 
                                value={form.password} 
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input 
                                    type="checkbox" 
                                    value={form.isRemember} 
                                    onChange={this.handleChangeCheckbox} 
                                /> Remember me
                            </label>
                        </div>
                        <button 
                            className="btn" 
                            type="button" 
                            onClick={this.handleSubmit} 
                        >Sign in</button>
              </form>
            </div>
          </div>
        )
    }
}
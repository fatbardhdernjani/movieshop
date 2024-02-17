import React, { useContext, useState } from 'react';
import "../../Components/Assets/styles/style.scss";
import { Context } from '../../Context/Products';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, dispatch] = useContext(Context);
  const [data, setData] = useState();

  const navgate = useNavigate()

  const onChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data,[name]: value });
  }
  console.log(data);

  const send = (e) => {
    e.preventDefault();
    if (data?.username) {
      localStorage.setItem("token", data.username);
      dispatch({
        type: "TOKEN",
        payland: { token: data.username }
      });
      navgate("/")
    }
  }

  return (
    <div className='login'>
      <form onSubmit={send}>
        <div className='form-grup'>
          <label>Username</label>
          <input
            type="text" 
            name="username"
            placeholder='Username'
            onChange={onChange}
          />
        </div>
        <div className='form-grup'>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            onChange={onChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;

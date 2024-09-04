import React, { useEffect, useState } from "react";
import css from './Register.module.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
    from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from "react-router-dom";
import { useDispatch} from "react-redux";
import { register } from "../../Redux/auth/operations";
import { message as notificationMessage } from "antd";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeat_passwords] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password!== repeat_password) {
      notificationMessage.error('Parolele nu se potrivesc');
      return
    }
    const crededials = {
      name,
      email,
      password,
      repeat_password,
    };

    dispatch(register(crededials));
    
    setName('');
    setEmail('');
    setPassword('');
    setRepeat_passwords('');
  };

  const handleChangeName = (event) => {
    setName(event.target.value)
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value)
  };
  const handleChangeResetPass = (event) => {
    setRepeat_passwords(event.target.value)
  }; 
    return (
    <MDBContainer fluid className="d-flex flex-row justify-content-center align-items-center " style={{width: '100%', height:'100vh'}}>
            <MDBCardBody className='d-flex flex-row border '>
          <MDBCol md='10' lg='6' className={css.img}>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol >
                <MDBRow style={{width:'100%'}}>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center' style={{width:'80%'}} >

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <form style={{width:'100%'}} onSubmit={handleSubmit}>
                 <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name'
                  id='form1'
                  type='text'
                  value={name}
                  onChange={handleChangeName}
                  className='w-100'
                    style={{ fontSize: '18px', padding: '15px' }}
                  required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email'
                  id='form2'
                  type='email'
                  value={email}
                  onChange={handleChangeEmail}
                    style={{ fontSize: '18px', padding: '15px' }}
                  required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password'
                  id='form3'
                  type='password'
                  value={password}
                    onChange={handleChangePass}
                    required
                  style={{ fontSize: '18px', padding: '15px' }} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="key me-3" size='lg'/>
               <MDBInput label='Repeat your password'
                  id='form4'
                  type='password'
                  value={repeat_password}
                    onChange={handleChangeResetPass}
                    required
                  style={{ fontSize: '18px', padding: '15px' }} />
                </div>
              <div className="d-flex flex-row justify-content-end align-items-center mb-4 w-100 ">
                <NavLink to='/login' className={css.link}>Already have an account? Login</NavLink>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mb-4 w-100 ">
                  <MDBBtn type="submit" className='mb-4' style={{ fontSize: '18px', padding: '15px', backgroundColor: '#199d7df0', fontWeight:'600', width:'50%' }} size='lg'>Register</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
    </MDBContainer>
  );
};

export default RegisterPage;


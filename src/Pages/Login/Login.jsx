import React, { useState } from "react";
import css from './Login.module.css';
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
import { logIn} from "../../Redux/auth/operations";
import { message as notificationMessage } from "antd";

const LoginPage = () => {
  const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });
  

  const handleSubmit = (event) => {
      event.preventDefault();
      const { email, password } = formState;

    dispatch(logIn({email, password}));
    
      setFormState({
        email: '',
        password: ''
      })
  };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
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
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email'
                  id='form2'
                  name="email"
                  type='email'
                  value={formState.email}
                  onChange={handleChange}
                    style={{ fontSize: '18px', padding: '15px' }}
                  required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password'
                  id='form3'
                  name="password"
                  type='password'
                  value={formState.password}
                    onChange={handleChange}
                    required
                  style={{ fontSize: '18px', padding: '15px' }} />
              </div>
              <div className="d-flex flex-row justify-content-end align-items-center mb-4 w-100 ">
                <NavLink to='/login' className={css.link}>Don't have an account? Register</NavLink>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mb-4 w-100 ">
                  <MDBBtn type="submit" className='mb-4' style={{ fontSize: '18px', padding: '15px', backgroundColor: '#199d7df0', fontWeight:'600', width:'50%' }} size='lg'>Log in</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
    </MDBContainer>
  );
};

export default LoginPage;


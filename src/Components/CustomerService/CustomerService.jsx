import React, { useEffect } from "react";
import css from './CustomerService.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectorcustomersError, selectorcustomersIsLoading, selectorcustomersService, selectorFormEmail, selectorFormMessage, selectorFormName } from "../../Redux/selectors";
import { fetchCustomerSupport } from "../../Redux/operations";
import { setClearForm, setEmail, setMessage, setName } from "../../Redux/CustomerService";
import { message as notificationMessage } from "antd";

const CustomerService = () => {

    const customers = useSelector(selectorcustomersService);
    const isLoading = useSelector(selectorcustomersIsLoading);
    const error = useSelector(selectorcustomersError);
    const name = useSelector(selectorFormName);
    const email = useSelector(selectorFormEmail);
    const message = useSelector(selectorFormMessage);

    const dispatch = useDispatch();
    
    if (error) {
        return <div> Error: {error} </div>
    };

    const handleNameChange = (event) => {
        dispatch(setName(event.target.value))
    };

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value))
    };

    const handleMessageChange = (event) => {
        dispatch(setMessage(event.target.value))
    };

    const  handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(fetchCustomerSupport({ name, email, message })).unwrap();
            notificationMessage.success('Mesajul a fost trimis cu succes!');
            dispatch(setClearForm());
        } catch (err) {
            console.error('Error occurred:', err);
            notificationMessage.error(`Error: ${err.message}`);
        }
    };

    return(
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.formInput}>
            <label htmlFor="name">Nume si Prenume</label>
        <input 
        type="text"
         name="name" 
         id="name" 
         value={name}
         onChange={handleNameChange}
         required />
            </div>
            <div className={css.formInput}>
            <label htmlFor="email">E-mail</label>
        <input
         type="email" 
         name="email" 
         id="email" 
         value={email}
         onChange={handleEmailChange}
         required />
            </div>
            <div className={css.formInput}>
            <label htmlFor="subject">Mesaj</label>
        <textarea 
        name="subject" 
        id="subject" 
        placeholder="Lasati mesajul dvs. aici..." 
        value={message}
        onChange={handleMessageChange}
        required>
        </textarea>
            </div>
            <button type="submit" className={css.button}>
                {isLoading ? 'Sending...' : 'Submit'}
            </button>
    </form>
    )
}

export default CustomerService;
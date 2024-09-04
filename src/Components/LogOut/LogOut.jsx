import React from "react";
import css from './LogOut.module.css';
import { useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
import { logOut } from "../../Redux/auth/operations";
import ModalLogOut from "../ModalLogOut/ModalLogOut";
import { useAuth } from "../../hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { message as notificationMessage } from "antd";


const LogOut = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();

    const handleLogOut = () => {
    dispatch(logOut())
        .then(() => {
            localStorage.clear();
            notificationMessage.success('Successfully logged out!');
            closeModal();
            navigate('/login'); 
        })
        .catch(error => {
            notificationMessage.error('Logout failed: ' + error.message);
        });
};
    return (
        user ? (  
            <div className={css.wrapper}>
                <p className={css.user}>{user.name}</p>
                <button type="button" onClick={openModal} className={css.btnExit}>
                    <span className={css.icon}><IoIosLogOut /></span>
                    <span>Exit</span>
                </button>
                {isOpen && <ModalLogOut logOut={handleLogOut} closeModal={closeModal} />}
            </div>
        ) : null  
    );
};

export default LogOut;
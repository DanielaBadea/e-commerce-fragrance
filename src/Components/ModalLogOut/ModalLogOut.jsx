import React from "react";
import css from "./ModalLogOut.module.css"

const ModalLogOut = ({ logOut, closeModal }) => {
    return (
        <div className={css.overlay} onClick={closeModal}>
            <div className={css.content} onClick={(e) => e.stopPropagation()}>
                <div className={css.title}>Are you sure you want to log out?</div>
                <div className={css.btns}>
                    <button className={css.btnLogOut} onClick={logOut}>Logout</button>
                    <button className={css.btnCancel} onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ModalLogOut;

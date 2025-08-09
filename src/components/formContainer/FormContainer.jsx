import "./FormContainer.css";
import React from "react";

const FormContainer = ({ children, onSubmit }) => {
    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>{children}</form>
        </div >
    );
};

export default FormContainer;
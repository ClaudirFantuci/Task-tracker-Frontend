import "./FormContainer.css";
import React from "react";

const FormContainer = ({ children }) => {
    return (
        <div className="form-container">
            <form>{children}</form>
        </div>
    );
};

export default FormContainer;
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const PadraoLayout = ({ children }) => {
    console.log("Rendering PadraoLayout with children:", children);
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default PadraoLayout;
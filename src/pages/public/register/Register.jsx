import Footer from "../../../components/footer/Footer";
import FormContainer from "../../../components/formContainer/FormContainer";
import Header from "../../../components/header/header";
import "./Register.css";
import InputField from "../../../components/inputField/InputField";
import React, { useState } from "react";
import AuthButton from "../../../components/AuthButton/AuthButton";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");

    return (
        <>
            <Header />
            <div className="main-content">
                <FormContainer>
                    <h1 className="title-register">Vamos começar ?</h1>
                    <InputField
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        description={"Nome"}
                    />
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        description={"E-mail"}
                    />
                    <InputField
                        type="Password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassWord(e.target.value)}
                        description={"Senha"}
                    />
                    <InputField
                        type="Password"
                        placeholder="Confirmar Senha"
                        value={password}
                        onChange={e => setPassWord(e.target.value)}
                        description={"Senha"}
                    />
                    <AuthButton>Cadastrar conta</AuthButton>

                </FormContainer>
            </div>
            <Footer />
        </>
    );
};

export default Register;
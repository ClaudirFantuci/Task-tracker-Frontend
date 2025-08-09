import AuthButton from "../../../components/AuthButton/AuthButton";
import Footer from "../../../components/footer/Footer";
import FormContainer from "../../../components/formContainer/FormContainer";
import Header from "../../../components/header/header";
import InputField from "../../../components/inputField/InputField";
import "./Login.css"

import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("")

    return (
        <>
            <Header />
            <div className="main-content">
                <FormContainer>
                    <h1 className="title-login">Bem vindo!</h1>
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
                    <a href="/recover">Esqueceu sua senha?</a>
                    <AuthButton>Login</AuthButton>
                    <a href="/register">
                        <span style={{ color: "#9198A1" }}>Novo aqui? </span>Crie uma conta
                    </a>
                </FormContainer>
            </div>
            <Footer />
        </>
    );
};

export default Login;
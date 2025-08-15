import { useState } from "react";
import AuthButton from "../../../components/AuthButton/AuthButton";
import Footer from "../../../components/footer/Footer";
import FormContainer from "../../../components/formContainer/FormContainer";
import InputField from "../../../components/inputField/InputField";
import Header from "../../../components/header/Header";
import "./Recover.css"

const Recover = () => {
    const [email, setEmail] = useState("");
    return (
        <>
            <Header />
            <div className="main-content">
                <FormContainer>
                    <h2 className="title-recover">Redefinir sua senha</h2>
                    <p className="text-recover">Digite o endereço de e-mail verificado da sua conta de usuário e lhe enviaremos um link para redefinir sua senha.</p>
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        name={email}
                        onChange={e => setEmail(e.target.value)}
                        description={"E-mail"}
                    />

                    <AuthButton>Enviar e-mail</AuthButton>
                </FormContainer>
                <Footer />
            </div>
        </>
    );
};

export default Recover;
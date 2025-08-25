import Footer from "../../../components/footer/Footer";
import FormContainer from "../../../components/formContainer/FormContainer";
import Header from "../../../components/header/Header";
import "./Register.css";
import InputField from "../../../components/inputField/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../../service/AuthenticationService";
import AuthButton from "../../../components/AuthButton/AuthButton";

const Register = () => {
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const authenticationService = new AuthenticationService();

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (newUser.password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        try {
            const response = await authenticationService.register(newUser);
            console.log(response.data);
            if (response.status === 200 && response.data.token) {
                localStorage.setItem("newUser", JSON.stringify(response.data));
                navigate("/home");
            } else {
                alert("Erro ao fazer cadastro");
            }
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.mensagem || "Erro ao conectar com o servidor");
        }
    };

    return (
        <>
            <Header />
            <div className="main-content">
                <FormContainer onSubmit={handleRegister}>
                    <h1 className="title-register">Vamos começar?</h1>
                    <InputField
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={newUser.nome}
                        onChange={handleChange}
                        description="Nome"
                    />
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        description="E-mail"
                    />
                    <InputField
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                        description="Senha"
                    />
                    <InputField
                        type="password"
                        placeholder="Confirmar Senha"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        description="Confirmar Senha"
                    />
                    {error && <div className="error-message">{error}</div>}
                    <AuthButton>Cadastrar conta</AuthButton>
                </FormContainer>
            </div>
            <Footer />
        </>
    );
};

export default Register;

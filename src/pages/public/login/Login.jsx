import AuthButton from "../../../components/AuthButton/AuthButton";
import Footer from "../../../components/footer/Footer";
import FormContainer from "../../../components/formContainer/FormContainer";
import Header from "../../../components/header/Header";
import InputField from "../../../components/inputField/InputField";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../../service/AuthenticationService";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const authenticationService = new AuthenticationService();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await authenticationService.login(user);
            console.log(response.data);
            if (response.status === 200 && response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/home");
            } else {
                alert("Erro ao fazer login");
            }
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.mensagem || "Erro ao conectar com o servidor");
        }
    };

    return (
        <>
            <Header />
            <div className="main-content">
                <FormContainer onSubmit={handleLogin}>
                    <h1 className="title-login">Bem vindo!</h1>
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                        description="E-mail"
                    />
                    <InputField
                        type="password"
                        placeholder="Senha"
                        name="password"
                        onChange={handleChange}
                        description="Senha"
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
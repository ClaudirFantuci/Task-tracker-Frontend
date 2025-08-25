import "./Header.css";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../service/AuthenticationService";

const Header = () => {
    const navigate = useNavigate();
    const authenticationService = new AuthenticationService();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = async () => {
        await authenticationService.logout();
        navigate("/");
    };

    return (
        <header className="Header">
            <h1>Priority</h1>
            {user && (
                <button onClick={handleLogout} className="logout-button">
                    Sair
                </button>
            )}
        </header>
    );
};

export default Header;
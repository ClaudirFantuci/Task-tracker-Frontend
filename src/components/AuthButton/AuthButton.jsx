import "./AuthButton.css";

const AuthButton = ({ children }) => {
    return <button type="submit" className="auth-button">{children}</button>
};
export default AuthButton;
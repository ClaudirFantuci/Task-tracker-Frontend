import "./InputField.css";

const InputField = ({ type, placeholder, name, onChange, description }) => {
    return (
        <div className="input-field">
            {description && <p>{description}</p>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
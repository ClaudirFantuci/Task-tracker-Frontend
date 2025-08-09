import "./InputField.css";

const InputField = ({ type, placeholder, value, onChange, description }) => {
    return (
        <div className="input-field">
            {description && <p>{description}</p>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
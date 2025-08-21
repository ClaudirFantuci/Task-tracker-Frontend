import "./InputField.css";

const InputField = ({ type, placeholder, name, onChange, description, value }) => {
    return (
        <div className="input-field">
            {description && <p>{description}</p>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default InputField;
import React from "react";

const Input = ({
    text = "Label",
    type = "text",
    placeholder = "placeholder text",
    other,
}) => {
    return (
        <>
            <div className="label">
                <label className="label-text">{text}</label>
            </div>
            <input
                className="input input-bordered w-full max-w-md"
                type={type}
                placeholder={placeholder}
                required={false}
                {...other}
            />
        </>
    );
};

export default Input;

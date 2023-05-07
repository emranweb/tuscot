import React from "react";

type InputPropsType = {
    text: string;
    type: string;
    placeholder: string;
};

const Input = ({
    text = "Label",
    type = "text",
    placeholder = "placeholder text",
}: InputPropsType) => {
    return (
        <>
            <div className="label">
                <label className="input-label">{text}</label>
            </div>
            <input
                className="input-default"
                type={type}
                placeholder={placeholder}
                required={false}
            />
        </>
    );
};

export default Input;

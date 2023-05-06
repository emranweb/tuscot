import React from "react";

type ButtonProps = {
    children: string;
    icon: JSX.Element;
};

const ButtonSocial = ({ icon, children }: ButtonProps) => {
    return (
        <button className="no">
            {icon}
            {children}
        </button>
    );
};

export default ButtonSocial;

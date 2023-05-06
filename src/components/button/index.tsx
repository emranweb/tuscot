import React from "react";

type ButtonProps = {
    children: string;
    icon?: JSX.Element;
    style?: string;
    variant?: "btn-default" | "btn-outline";
};

const Button = ({
    icon,
    style,
    variant = "btn-default",
    children,
}: ButtonProps) => {
    return (
        <button className={`btn ${variant} ${style}`}>
            {icon && (
                <div className="text-xl mr-2 inline-block relative top-1">
                    {icon}
                </div>
            )}
            {children}
        </button>
    );
};

export default Button;

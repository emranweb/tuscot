import React from "react";

const MiniCard = ({ icon, title, subtitle }) => {
    return (
        <div className="bg-white rounded-2xl flex items-center py-4 px-5 w-2/12">
            <div className="bg-[#F4F7FE] rounded-full text-primary w-14 h-14 text-2xl flex items-center justify-center mr-4">
                {icon}
            </div>
            <div>
                <h4 className="text-sm  text-textsecondary font-medium mb-1">
                    {title}
                </h4>
                <h5 className="text-2xl font-bold text-textprimary">
                    {subtitle}
                </h5>
            </div>
        </div>
    );
};

export default MiniCard;

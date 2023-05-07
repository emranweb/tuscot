import React from "react";
import MiniCard from "./MiniCard";
import { BiObjectsHorizontalLeft } from "react-icons/bi";

const MiniCartList = () => {
    return (
        <div className="flex items-center justify-between flex-wrap">
            <MiniCard
                icon={<BiObjectsHorizontalLeft />}
                title="Earnings"
                subtitle="$350.4"
            />
            <MiniCard
                icon={<BiObjectsHorizontalLeft />}
                title="Earnings"
                subtitle="$350.4"
            />
            <MiniCard
                icon={<BiObjectsHorizontalLeft />}
                title="Earnings"
                subtitle="$350.4"
            />
            <MiniCard
                icon={<BiObjectsHorizontalLeft />}
                title="Earnings"
                subtitle="$350.4"
            />
            <MiniCard
                icon={<BiObjectsHorizontalLeft />}
                title="Earnings"
                subtitle="$350.4"
            />
        </div>
    );
};

export default MiniCartList;

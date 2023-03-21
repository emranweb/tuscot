import React from "react";
import ProfileBG from "/profile-mini-info-bg.png";
import Avatar from "/profile-avatar.png";

const ProfileMiniInfo = () => {
    return (
        <div className="bg-white rounded-2xl p-3 w-4/12">
            <div>
                <img src={ProfileBG} alt="profile minibg" />
            </div>
            <div className="flex justify-center flex-col items-center relative -top-10 mb-4">
                <img src={Avatar} alt="person avatar" />
                <h4 className="text-2xl font-bold text-textprimary">
                    Adela Parkson
                </h4>
                <p className="text-sm font-medium text-textsecondary">
                    Product Designer
                </p>
            </div>
            <div className="w-2/3 mx-auto flex justify-between items-center  m-5 sm:flex-col">
                <div>
                    <h5 className="text-2xl font-bold text-textprimary">17</h5>
                    <p className="text-sm font-medium text-textsecondary">
                        Posts
                    </p>
                </div>
                <div>
                    <h5 className="text-2xl font-bold text-textprimary">
                        9.5k
                    </h5>
                    <p className="text-sm font-medium text-textsecondary">
                        Following
                    </p>
                </div>
                <div>
                    <h5 className="text-2xl font-bold text-textprimary">274</h5>
                    <p className="text-sm font-medium text-textsecondary">
                        Follower
                    </p>
                </div>
                <button className="text-sm text-white p-3 bg-primary rounded-xl">
                    Publish now
                </button>
            </div>
        </div>
    );
};

export default ProfileMiniInfo;

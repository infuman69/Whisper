import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

const Profile = () => {
    return (
        <div className="bg-primary w-full flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center w-2/4 bg-highlight rounded-md py-2 px-3">
                <BiUserCircle />
                <h2>Username</h2>
                <textarea
                    className="w-10/12"
                    placeholder="Write something about you..."
                />
                <div className="flex justify-between w-full items-center">
                    <h4>Gender</h4>
                    <p>Male</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <h4>Age</h4>
                    <p>19</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

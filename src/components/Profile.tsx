"use client";

import React from "react";
import Image from "next/image";

import profilePict from "../../public/images/Profile.jpg";

const Profile = () => {
  return (
    <div className="bg-slate-50 p-12 rounded-xl h-full w-3/5">
      <div className="flex justify-center bg-slate-7">
        <div className="flex justify-center items-center rounded-full w-32 h-32 object-cover object-center overflow-hidden">
          <Image
            src={profilePict}
            width={250}
            height={250}
            objectFit="cover"
            objectPosition="center bottom"
            alt="Profile Picture"
          />
        </div>
      </div>
      <p className="pt-4 text-4xl font-semibold">Miftah Fauzi</p>
      <p className="text-lg">Welcome to my Portfolio Website</p>
      <p className="text-lg">
        I’m a student from Pasundan University and i live in Bandung, Jawa
        Barat, Indonesia.
      </p>
    </div>
  );
};

export default Profile;

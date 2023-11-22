// Profile.js
import React from 'react';
import Image from 'next/image';

import profilePict from "@/images/profile.jpg"


const Profile = () => {
  return (
    <div className="bg-slate-50 p-12 rounded-xl h-full w-3/5">
  <div className='flex justify-center bg-slate-7'>
    <div className="bg-black justify-center items-center rounded-full pb-4 w-12 h-12 overflow-hidden">
      <Image
        src={profilePict}
        width={100}
        height={100}
        alt="Profile Picture"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  </div>
  <p className="text-3xl font-semibold">Miftah Fauzi</p>
  <p className="text-sm">Welcome to my Portfolio Website</p>
  <p className="text-sm">I’m a student from Pasundan University and i live in Bandung, Jawa Barat, Indonesia.</p>
</div>

  );
};

export default Profile;

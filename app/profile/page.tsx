"use client"
import Sidebar from '@/components/Sidebar';
import React from 'react';
import { useRouter } from 'next/navigation';
import { PencilIcon, ArrowLeftIcon } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const router = useRouter();

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.',
    profilePicture: '/path/to/profile-picture.jpg', // Replace with the actual path to the profile picture
  };

  const handleEditProfile = () => {
    router.push('/profile/edit-profile');
  };

  const handleBack = () => {
    router.push('/dashboard/events');
  };

  return (
    <div>
      <Sidebar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md relative">
          <div className="absolute top-4 left-4">
            <button onClick={handleBack} aria-label="Back">
              <ArrowLeftIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
          <div className="absolute top-4 right-4">
            <button onClick={handleEditProfile} aria-label="Edit Profile">
              <PencilIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={user.profilePicture}
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <p className="text-gray-800 text-center">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
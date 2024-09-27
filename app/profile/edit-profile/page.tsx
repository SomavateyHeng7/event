"use client";
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeftIcon } from 'lucide-react';

const EditProfilePage: React.FC = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.',
    profilePicture: '/path/to/profile-picture.jpg', // Replace with the actual path to the profile picture
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(user.profilePicture);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUser((prevUser) => ({ ...prevUser, profilePicture: file.name })); // Update the profile picture path
    }
  };

  const handleSaveProfile = () => {
    // Save profile logic here
    console.log('Profile saved:', user);
    router.push('/profile');
  };

  const handleBack = () => {
    router.push('/profile');
  };

  return (
    <div>
      <Sidebar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="flex flex-col items-center">
            <button
              onClick={handleBack}
              className="self-start mb-4 flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back
            </button>
            {profilePicturePreview && (
              <Image
                src={profilePicturePreview}
                alt="Profile Picture"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mb-4"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mb-2 p-2 border rounded w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mb-2 p-2 border rounded w-full"
              placeholder="Email"
            />
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="mb-2 p-2 border rounded w-full"
              placeholder="Bio"
            />
            <button
              onClick={handleSaveProfile}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
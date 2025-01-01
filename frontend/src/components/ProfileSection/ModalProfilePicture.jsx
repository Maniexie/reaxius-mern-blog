/**
 * Modal component for editing profile picture.
 *
 * @param {boolean} isOpen - Whether the modal is open or not.
 * @param {function} onClose - Function to close the modal.
 * @param {function} onSave - Function to save the changes.
 * @param {object} userData - User data object.
 * @param {function} setUserData - Function to update the user data object.
 */

import React, { useEffect } from "react";
const ModalProfilePicture = ({
  isOpen,
  onClose,
  onSave,
  userData,
  setUserData,
}) => {
  if (!isOpen) return null;

  /**
   * Handles input changes for the profile picture.
   * @param {event} e - Event object.
   */
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUserData((prevData) => ({
        ...prevData,
        profile_picture: fileUrl,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (userData.profile_picture) {
        URL.revokeObjectURL(userData.profile_picture);
      }
    };
  }, [userData.profile_picture]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Profile Picture</h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <div className="image text-center items-center flex justify-center mb-5">
              {userData.profile_picture && (
                <img
                  src={userData.profile_picture}
                  alt="Profile Picture"
                  className="w-36 h-36 rounded-full"
                />
              )}
            </div>
            <input
              type="file"
              name="profile_picture"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProfilePicture;

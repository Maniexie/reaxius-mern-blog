import { useState } from "react";
import ProfileLayout from "../../layouts/profileLayout";
import Modal from "./modal";

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSave = (event) => {
    event.preventDefault();
    alert("Profile saved successfully");
    // Handle save logic here
    handleCloseModal();
  };

  return (
    <div>
      <ProfileLayout>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-6">
            Halaman Profile
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-32 h-32 rounded-full shadow-lg"
              />
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleOpenModal}
              >
                Edit Profile
              </button>
            </div>

            {/* Profile Info */}
            <div className="w-full md:w-2/3">
              <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Informasi Profil
                </h2>
                <div className="mb-2">
                  <span className="font-bold">Nama:</span> John Doe
                </div>
                <div className="mb-2">
                  <span className="font-bold">Email:</span> john.doe@example.com
                </div>
                <div className="mb-2">
                  <span className="font-bold">Telepon:</span> +62 812 3456 7890
                </div>
                <div className="mb-2">
                  <span className="font-bold">Alamat:</span> Jakarta, Indonesia
                </div>
              </div>
            </div>
          </div>
          {/* Modal Component */}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSave}
          />
        </div>
      </ProfileLayout>
    </div>
  );
};

export default ProfileSection;

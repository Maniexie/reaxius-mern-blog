import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../../api/user";
import ProfileLayout from "../../layouts/profileLayout";
import Modal from "./Modal";
import ModalProfilePicture from "./ModalProfilePicture";

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenProfilePicture, setIsModalOpenProfilePicture] =
    useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenModalProfilePicture = () =>
    setIsModalOpenProfilePicture(true);
  const handleCloseModalProfilePicture = () =>
    setIsModalOpenProfilePicture(false);

  useEffect(() => {
    // Fetch data by ID
    const fetchData = async () => {
      try {
        const response = await getUserById("123"); // Ganti dengan ID dinamis
        const user = response.user;
        console.log("cek user : " + user);
        console.log("cek response user : " + response);
        setUserData({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          address: user.address,
          country: user.country || "",
          bio: user.bio || "",
          profile_picture: user.profile_picture || "",
          followers: user.followers || 0,
          following: user.following || 0,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSave = async (event) => {
    event.preventDefault();

    // Simpan data ke API jika diperlukan
    console.log("Saved data atas:", userData);
    await updateDataUser(userData);
    setUserData(userData);
    console.log("Saved data bawah:", userData);
    setIsModalOpen(false);
  };

  const updateDataUser = async () => {
    try {
      const response = await updateUser(userData);
      setUserData(response); // Gunakan respons API untuk memperbarui state
      console.log("Data berhasil diperbarui:", response);
    } catch (error) {
      console.error("Error saat memperbarui data:", error);
    }
  };

  useEffect(() => {
    const response = await updateDataUser();
    console.log("userData:", userData);
    setUserData
  });

  if (!userData) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Profile Page</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img
              src={userData.profile_picture}
              alt="User Avatar"
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleOpenModalProfilePicture}
            >
              Edit Picture
            </button>
          </div>

          {/* Profile Info */}
          <div className="w-full md:w-2/3">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Profile Information
              </h2>
              <div className="mb-2">
                <span className="font-bold">Name:</span> {userData.name}
              </div>
              <div className="mb-2">
                <span className="font-bold">Email:</span> {userData.email}
              </div>
              <div className="mb-2">
                <span className="font-bold">Phone:</span> {userData.phone}
              </div>
              <div className="mb-2">
                <span className="font-bold">Address:</span> {userData.address}
              </div>
              <div className="mb-2">
                <span className="font-bold">country:</span> {userData.country}
              </div>
              <div className="mb-2">
                <span className="font-bold">followers:</span>{" "}
                {userData.followers || 0}
              </div>
              <div className="mb-2">
                <span className="font-bold">following:</span>{" "}
                {userData.following}
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleOpenModal}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Modal Profile Picture */}
        <ModalProfilePicture
          isOpen={isModalOpenProfilePicture}
          onClose={handleCloseModalProfilePicture}
          onSave={handleSave}
          userData={userData}
          setUserData={setUserData}
        />

        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          userData={userData}
          setUserData={setUserData}
        />
      </div>
    </ProfileLayout>
  );
};

export default ProfileSection;

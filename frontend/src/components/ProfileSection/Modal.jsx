const Modal = ({ isOpen, onClose, onSave, userData, setUserData }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={userData.name || ""}
              onChange={handleInputChange}
              className="w-full p-2 border rounded  bg-slate-200 cursor-not-allowed select-none"
              placeholder="Enter your name"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={userData.email || ""}
              onChange={handleInputChange}
              className="w-full p-2 border rounded bg-slate-200 cursor-not-allowed"
              placeholder="Enter your email"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              country:
            </label>
            <input
              type="text"
              name="country"
              value={userData.country || ""}
              //   onChange={(e) => handleInputChange("phone", e.target.value)}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Country"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              phone:
            </label>
            <input
              type="text"
              name="phone"
              value={userData.phone || ""}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter Your Country"
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

export default Modal;

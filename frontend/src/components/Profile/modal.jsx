const modal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null; // Jika modal tidak terbuka, jangan render apa pun

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Nama:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Masukkan email Anda"
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

export default modal;

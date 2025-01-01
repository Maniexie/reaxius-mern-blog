import DashboardLayout from "../../layouts/dashboardLayout";

const PostNew = () => {
  const listLeft = Array.from({ length: 20 }, (_, i) => `Konten Kiri ${i + 1}`);
  const listRight = Array.from(
    { length: 20 },
    (_, i) => `Konten Kanan ${i + 1}`
  );

  const list = Array.from({ length: 20 }, (_, i) => `Artikel ${i + 1}`);

  return (
    <div>
      <DashboardLayout />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-screen flex">
        {/* Kolom Kiri */}
        <div className="w-1/5 bg-gray-100 p-4 rounded-lg h-full overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Kolom Kiri</h2>
          {listLeft.map((item, index) => (
            <div
              key={index}
              className="p-2 mb-2 bg-white rounded-lg shadow-sm border"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Kolom Tengah */}
        <div className="flex-1 bg-gray-50 p-4 rounded-lg h-full">
          <h2 className="text-xl font-semibold mb-4">Kolom Tengah</h2>
          {/* Form Input */}
          <div className="mb-6">
            <textarea
              className="w-full border rounded-lg p-2 mb-2"
              placeholder="Tulis postingan Anda di sini..."
              rows="4"
            ></textarea>
            <input type="file" className="mb-2" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </div>
          {/* Postingan Beranda */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Postingan Beranda</h2>
            {list.map((item, index) => (
              <div
                key={index}
                className="p-2 mb-2 bg-white rounded-lg shadow-sm border"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="w-1/5 bg-gray-100 p-4 rounded-lg h-full overflow-y-auto ml-4">
          <h2 className="text-xl font-semibold mb-4">Kolom Kanan</h2>
          {listRight.map((item, index) => (
            <div
              key={index}
              className="p-2 mb-2 bg-white rounded-lg shadow-sm border"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostNew;

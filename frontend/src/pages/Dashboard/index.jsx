import DashboardLayout from "../../layouts/dashboardLayout";
import list from "../../dummy/list";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout />
      <div className="mx-auto flex flex-col justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard Blog Post</h1>
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
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Postingan Beranda</h2>
          <div className="h-64 overflow-y-auto">
            {list.map((item) => (
              <div
                key={item.id}
                className="p-2 mb-2 bg-white rounded-lg shadow-sm border"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

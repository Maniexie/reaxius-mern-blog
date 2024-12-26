import { Link, Outlet } from "react-router";

const authLayout = () => {
  return (
    <div>
      <Link to="/" className="fixed ml-3 top-3">
        ~=== Back
      </Link>
      <Outlet />
    </div>
  );
};

export default authLayout;

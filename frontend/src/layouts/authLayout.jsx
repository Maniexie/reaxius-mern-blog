import { Outlet } from "react-router";

const authLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default authLayout;

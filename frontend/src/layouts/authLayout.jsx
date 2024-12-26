import { Outlet } from "react-router";

const authLayout = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};

export default authLayout;

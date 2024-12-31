import { Link, Outlet } from "react-router";
import ArrowLeft from "../../public/icons/ArrowLeft";

const authLayout = () => {
  return (
    <div>
      <Link
        to="/"
        className="fixed ml-3 top-3 hover:bg-slate-400 p-1 rounded-lg"
      >
        <ArrowLeft />
      </Link>
      <Outlet />
    </div>
  );
};

export default authLayout;

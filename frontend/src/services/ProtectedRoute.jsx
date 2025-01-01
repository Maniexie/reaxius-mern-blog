import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const idUser = localStorage.getItem("id");

  if (!idUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

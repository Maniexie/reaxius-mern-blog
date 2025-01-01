import Navbar from "../components/Navbar";

const profileLayout = ({ children }) => {
  return (
    <div className="mt-16">
      <Navbar />
      {children}
    </div>
  );
};

export default profileLayout;

import FormAuth from "../../../components/FormAuth";
const index = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md space-y-8">
        <FormAuth type="login" />
      </div>
    </div>
  );
};

export default index;

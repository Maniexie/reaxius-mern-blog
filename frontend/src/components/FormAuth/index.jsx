import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom"; // Pastikan impor dari react-router-dom
import { login, register } from "../../api/auth";
import { useState } from "react";

export default function FormAuth({ type = "login" }) {
  if (!type || typeof type !== "string") {
    throw new Error("FormAuth: type prop must be a string");
  }

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (type === "login") {
        if (!formData.email || !formData.password) {
          // setError("Email and password are required");
          alert("Email and password are required");
          return;
        } else if (
          !formData.email.includes("@") ||
          !formData.email.includes(".")
        ) {
          alert("Invalid email format");
          return;
        }

        const response = await login({
          email: formData.email,
          password: formData.password,
        });
        alert("Login Successfully", response.user.message);
        console.log("Form Data:", {
          email: formData.email,
          password: formData.password,
        });
        navigate("/");
      } else if (type === "register") {
        const response = await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          country: formData.country,
          address: formData.address,
        });
        console.log("Register Successfully", response);
        console.log("Form Data:", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          country: formData.country,
          address: formData.address,
        });

        setError(""); // Clear error on success
        alert("Register Successfully");
        navigate("/login");
      } else {
        console.error("FormAuth: type prop must be a string");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white px-6 py-8 shadow sm:rounded-lg"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            {type === "login" ? "Login" : "Register"}
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>

        <div className="space-y-4">
          {type === "register" && (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
            />
          </div>

          {type === "register" && (
            <>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="block w-full appearance-none rounded-md border-gray-300 bg-white px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                />
              </div>
            </>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-3 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {type === "login" ? "Login" : "Register"}
          </button>
        </div>

        <div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            {type === "login" ? (
              <>
                Dont have an account?{" "}
                <Link
                  to="/register"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Register here
                </Link>
                .
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Login here
                </Link>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </form>
  );
}

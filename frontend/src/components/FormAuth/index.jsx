import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

export default function FormAuth({ type = "login" }) {
  if (!type || typeof type !== "string") {
    throw new Error("FormAuth: type prop must be a string");
  }

  return (
    // Form
    <form className="max-w-lg mx-auto bg-white px-6 py-8 shadow sm:rounded-lg">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            {type === "login" ? "Login" : "Register"}
          </h2>
        </div>

        {/* Fields */}
        <div className="space-y-4">
          {type === "register" && (
            <>
              {/* Name */}
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
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                />
              </div>
            </>
          )}

          {/* Email */}
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
              autoComplete="email"
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
            />
          </div>

          {/* Password */}
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
              autoComplete="current-password"
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
            />
          </div>

          {type === "register" && (
            <>
              {/* Phone */}
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
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="relative mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full appearance-none rounded-md border-gray-300 bg-white px-3 py-3 pr-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                  >
                    <option>==Select Country==</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                  />
                </div>
              </div>

              {/* Address */}
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
                  autoComplete="street-address"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                />
              </div>
            </>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-3 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {type === "login" ? "Login" : "Register"}
          </button>
        </div>

        {/* Navigation for Login/Register */}
        <div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            {type === "login" ? (
              <>
                Don't have an account?{" "}
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

import axiosInstance from "../config/axiosInstance";

//Login User
export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);

    localStorage.setItem("id", response.data.user._id);
    localStorage.setItem("name", response.data.user.name);
    localStorage.setItem("email", response.data.user.email);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//Register User
export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/register", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//Logout User
export const logout = async () => {
  try {
    const id = localStorage.getItem("id");
    const response = await axiosInstance.post("/logout/" + id);
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  } finally {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  }
};

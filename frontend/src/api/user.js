import axiosInstance from "../config/axiosInstance";

const getUser = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getUserById = async () => {
  try {
    const id = localStorage.getItem("id");
    const response = await axiosInstance.get(`/user/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async () => {
  try {
    const id = localStorage.getItem("id");
    const response = await axiosInstance.put("/user/" + id);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { getUser, getUserById, updateUser };

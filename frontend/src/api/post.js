import axiosInstance from "../config/axiosInstance";

const getPost = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    console.log("getPostAPI:" + response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const sendPost = async (newPost) => {
  try {
    const response = await axiosInstance.post("/post", newPost);
    console.log("Response from API:", response.data); // Tambahkan log untuk memeriksa response

    console.table(response.data);
    return response;
  } catch (error) {
    return error.response.data;
  }
};

// const sendPost = a;

export { getPost, sendPost };

import axiosInstance from "../config/axiosInstance";
import axiosInstancer from "../config/axiosInstance";

const getCommentPost = async (id) => {
  try {
    const response = await axiosInstancer.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const sendCommentPost = async (user_id, content, media, media_type) => {
  try {
    const response = await axiosInstance.post(
      "/post",
      user_id,
      media,
      content,
      media_type
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { getCommentPost, sendCommentPost };

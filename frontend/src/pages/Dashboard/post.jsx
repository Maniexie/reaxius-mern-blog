import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/dashboardLayout";
import { CommentForm } from "../../components/CommentForm";
import { getPost, sendPost } from "../../api/post";

const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    user_id: posts.user_id || localStorage.getItem("id"),
    content: posts.content,
    media: posts.media,
    media_type: posts.media_type,
  });

  const addComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  const sendPostUser = async () => {
    try {
      const response = await sendPost(newPost);

      // Validasi respons
      if (!response || !response.data) {
        console.error("Response data is missing or undefined");
        return;
      }

      console.log("Response data | sendPostUser:", response.data);

      const newPostData = {
        ...response.data,
        user_id: {
          _id: localStorage.getItem("id"),
          name: localStorage.getItem("name"),
          profile_picture: localStorage.getItem("profile_picture"),
        },
      };

      setPosts((prevPosts) => [...prevPosts, newPostData]);

      setNewPost({
        user_id: posts.user_id || localStorage.getItem("id"),
        content: posts.content,
        media: posts.media,
        media_type: posts.media_type,
      });
      console.log("cek response sendPostUser :" + response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending post cek sendPostuser:", error.message);
    }
  };

  const getPostUser = async () => {
    try {
      const response = await getPost();
      console.log("Posts fetched:", response);
      setPosts(Array.isArray(response.posts) ? response.posts : response); // Validasi data
    } catch (error) {
      console.error(
        "Error fetching posts:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getPostUser();
    setIsLoading(false);
  }, []);

  const postItems = posts.map((post) => (
    <div className="" key={post?._id || post.tempKey}>
      <div
        key={post?._id || post.tempKey}
        className="p-4 mb-4 bg-white rounded-lg shadow-sm border"
      >
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-sm text-gray-500">
          By {post.user_id?.name || "Unknown User"} | Updated at{" "}
          {post.timestamp}
        </p>
        <p className="text-gray-700">{post.content}</p>
        <div className="flex">
          media:
          {post.media && (
            <img
              src={post.media}
              alt={post.media_type}
              className="w-full h-auto"
            />
          )}
        </div>
        <div className="mt-4">
          {post.comments?.map((comment) => (
            <div
              key={comment._id}
              className="p-2 mb-2 bg-gray-100 rounded-lg border"
            >
              <p className="text-gray-700">{comment.content}</p>
              <p className="text-sm text-gray-500">
                By {comment.user_id.name} | Updated at{" "}
                {new Date(comment.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <CommentForm postId={post._id} addComment={addComment} />
      </div>
    </div>
  ));

  return (
    <div>
      <DashboardLayout />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-screen flex">
        <div className="w-1/5 bg-gray-100 p-4 rounded-lg h-screen sticky top-0 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Kolom Kiri</h2>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded-lg h-full">
          <h2 className="text-xl font-semibold mb-4">Apa inspirasi anda?</h2>
          <div className="mb-6">
            <textarea
              className="w-full border rounded-lg p-2 mb-2"
              placeholder="Tulis postingan Anda di sini..."
              rows="4"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            ></textarea>
            <input
              type="file"
              className="mb-2"
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  media: URL.createObjectURL(e.target.files[0]),
                  media_type: e.target.files[0].type,
                })
              }
            />
            <button
              onClick={sendPostUser}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Postingan Beranda</h2>
            <div>{postItems}</div>
          </div>
        </div>
        <div className="w-1/5 bg-gray-100 p-4 rounded-lg h-full ml-4">
          <h2 className="text-xl font-semibold mb-4">Kolom Kanan</h2>
        </div>
      </div>
    </div>
  );
};

export default Post;

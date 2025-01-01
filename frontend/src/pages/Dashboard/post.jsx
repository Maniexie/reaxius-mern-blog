import { useState } from "react";
import postData from "../../dummy/post";
import DashboardLayout from "../../layouts/dashboardLayout";
import { CommentForm } from "../../components/CommentForm";

const Post = () => {
  const [posts, setPosts] = useState(postData);

  const addComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <div>
      <DashboardLayout />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-screen flex">
        {/* Kolom Kiri */}
        <div className="w-1/5 bg-gray-100 p-4 rounded-lg h-screen sticky top-0 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Kolom Kiri</h2>
          {/* Konten kiri */}
          <div className="p-2 mb-2 bg-white rounded-lg shadow-sm border">
            Konten kiri
          </div>
        </div>

        {/* Kolom Tengah */}
        <div className="flex-1 bg-gray-50 p-4 rounded-lg h-full">
          <h2 className="text-xl font-semibold mb-4">Apa inspirasi anda?</h2>
          <div className="mb-6">
            <textarea
              className="w-full border rounded-lg p-2 mb-2"
              placeholder="Tulis postingan Anda di sini..."
              rows="4"
            ></textarea>
            <input type="file" className="mb-2" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </div>

          {/* Postingan Beranda */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Postingan Beranda</h2>
            {posts.map((item) => (
              <div
                key={item.id}
                className="p-4 mb-4 bg-white rounded-lg shadow-sm border"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  By {item.author} | Updated at{" "}
                  {new Date(item.updatedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{item.content}</p>

                <div className="mt-4">
                  {item.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="p-2 mb-2 bg-gray-100 rounded-lg border"
                    >
                      <p className="text-gray-700">{comment.content}</p>
                      <p className="text-sm text-gray-500">
                        By {comment.author} | Updated at{" "}
                        {new Date(comment.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                  <CommentForm postId={item.id} addComment={addComment} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="w-1/5 bg-gray-100 p-4 rounded-lg h-full ml-4">
          <h2 className="text-xl font-semibold mb-4">Kolom Kanan</h2>
          {/* Konten kanan */}
        </div>
      </div>
    </div>
  );
};

export default Post;

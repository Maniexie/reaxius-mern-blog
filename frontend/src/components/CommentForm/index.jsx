import postData from "../../dummy/post";

// export const CommentForm = ({ postId, addComment }) => {
export const CommentForm = ({ postId, addComment }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const newComment = {
        id: Date.now(), // Menggunakan timestamp sebagai ID unik
        content: e.target.value,
        author: postData.find((post) => post.id === postId).author, // Replace with dynamic user data
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      addComment(postId, newComment);
      e.target.value = ""; // Reset textarea
    }
  };

  return (
    <>
      <textarea
        className="w-full border rounded-lg p-2 mt-2"
        placeholder="Tulis komentar Anda..."
        rows="2"
        onKeyDown={handleKeyDown}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex flex-justify-end items-end">
        <span className="material-symbols-outlined">send</span>
      </button>
    </>
  );
};

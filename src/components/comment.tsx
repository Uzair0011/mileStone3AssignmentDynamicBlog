"use client";
import React, { useState } from "react";

export default function Comment() {
  const [comments, setComments] = useState<{ name: string; message: string }[]>(
    []
  ); // State for comments
  const [name, setName] = useState<string>(""); // State for name input
  const [message, setMessage] = useState<string>(""); // State for message input
  const [editIndex, setEditIndex] = useState<number | null>(null); // State for editing comments

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !message) return alert("Both fields are required!");

    if (editIndex !== null) {
      const updatedComments = comments.map((comment, index) =>
        index === editIndex ? { name, message } : comment
      );
      setComments(updatedComments);
      setEditIndex(null);
    } else {
      setComments([...comments, { name, message }]);
    }

    setName("");
    setMessage("");
  };

  const handleEditComment = (index: number) => {
    setEditIndex(index);
    setName(comments[index].name);
    setMessage(comments[index].message);
  };

  const handleRemoveComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="px-4">
      {/* Add Comment Section */}
      <div className="h-auto rounded-lg bg-slate-500 my-11 flex flex-col justify-center items-center py-8 px-4 md:px-11">
        <h1 className="font-bold text-2xl md:text-3xl text-center">
          Comment Section
        </h1>
        <form onSubmit={handleAddComment} className="w-full max-w-lg mt-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
            className="w-full h-[50px] mb-4 p-3 border rounded focus:outline-none"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="w-full h-[50px] mb-4 p-3 border rounded focus:outline-none"
          />
          <button className="w-full px-5 py-3 bg-black text-white font-medium rounded">
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* Display Comments Section */}
      <div className="w-full max-w-3xl mx-auto">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-slate-200 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
            >
              <div>
                <h2 className="font-bold">{comment.name}</h2>
                <p>{comment.message}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditComment(index)}
                  className="px-4 py-2 bg-blue-500 text-white rounded w-full md:w-auto"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveComment(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded w-full md:w-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}

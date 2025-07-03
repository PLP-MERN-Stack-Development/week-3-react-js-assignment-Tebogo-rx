import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ApiPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const postsPerPage = 3;

  // Fetch posts once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10)); // limit to 10 posts
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic on filtered posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handlers
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 when search query changes
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">JSONPlaceholder Posts</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
      />

      {loading && <p className="text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && currentPosts.length === 0 && (
        <p className="text-gray-500">No matching posts found.</p>
      )}

      {!loading && !error &&
        currentPosts.map((post) => (
          <Card key={post.id} title={post.title}>
            <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}

      {/* Pagination Controls */}
      {!loading && !error && filteredPosts.length > 0 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ApiPage;

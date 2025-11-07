import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import PostPage from '@/pages/PostPage';
import CreatePostPage from '@/pages/CreatePostPage';
import EditPostPage from '@/pages/EditPostPage';
import CategoryPage from '@/pages/CategoryPage';
import AuthorPage from '@/pages/AuthorPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>BlogHub - Your Creative Writing Space</title>
        <meta name="description" content="A modern blogging platform where writers share their stories, insights, and creativity with the world." />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/edit/:id" element={<EditPostPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/author/:author" element={<AuthorPage />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
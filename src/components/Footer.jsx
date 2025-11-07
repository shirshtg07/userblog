import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PenTool className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">BlogHub</span>
            </div>
            <p className="text-slate-400">
              Your creative writing space to share stories and connect with readers.
            </p>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/blog" className="block text-slate-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/create" className="block text-slate-400 hover:text-white transition-colors">
                Create Post
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Categories</span>
            <div className="space-y-2">
              <Link to="/category/technology" className="block text-slate-400 hover:text-white transition-colors">
                Technology
              </Link>
              <Link to="/category/lifestyle" className="block text-slate-400 hover:text-white transition-colors">
                Lifestyle
              </Link>
              <Link to="/category/travel" className="block text-slate-400 hover:text-white transition-colors">
                Travel
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Connect</span>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 BlogHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
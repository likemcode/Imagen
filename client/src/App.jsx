import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="bg-black text-white py-4 px-6 flex flex-wrap justify-between items-center text-sm">
      <div className="flex items-center mr-4">
        
        <span>© 2024 Imagen. All rights reserved.</span>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Made with 🧠 + ❤️ by</span>
        <a 
          href="http://josueavuh.vercel.app" 
          className="text-blue-400 hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Jojo
        </a>
      </div>
      <div className="flex items-center">
        Powered by Stable Diffusion V3
      </div>
    </footer>
  </BrowserRouter>
);

export default App;
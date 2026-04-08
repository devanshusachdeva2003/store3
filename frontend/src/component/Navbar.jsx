import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
 const [modal, setModal] = useState(false);
  return (
    <div>
    <nav className="bg-blue-400 text-white px-6 py-3 flex flex-row items-center">
   <img width="50" height="64" src="https://img.icons8.com/stencil/64/clothes.png" alt="clothes"/>

      <ul className="flex gap-6 items-center ml-15">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Dropdown */}
        <li className="relative">
          <button onClick={() => setOpen(!open)} className="flex items-center ">
            Products ▾
          </button>
          {open && (
            <div className="absolute top-10 left-0 bg-blue-400 rounded shadow-lg w-40">
              <Link
                to="/project1"
                className="block px-4 py-2 hover:bg-slate-700"
                onClick={() => setOpen(false)}
              >
                Clothes 👕
              </Link>

              <Link
                to="/project2"
                className="block px-4 py-2 hover:bg-slate-700"
                onClick={() => setOpen(false)}
              >
              Shoes 👟
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
       <div className="flex items-center bg-slate-800 rounded-lg px-4 py-2 w-full max-w-xl ml-40">
        <FaSearch className="text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Search Shoes"
          className="bg-transparent outline-none text-white w-full placeholder-slate-400"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-slate-300 text-lg ml-10">

        <div className="flex items-center gap-1 cursor-pointer hover:text-white">
           <FaUser
            className="cursor-pointer hover:text-white"
            onClick={() => setModal(true)}
          />
          <span className="text-sm">▾</span>
        </div>

        <FaHeart className="cursor-pointer hover:text-white" />
        <FaShoppingBag className="cursor-pointer hover:text-white" />

      </div>
   {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">

          {/* BLUR BACKGROUND */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setModal(false)}
          ></div>

          {/* CENTER BOX */}
          <div className="relative bg-slate-900 text-white p-8 rounded-xl shadow-lg w-[90%] max-w-md">

            <h2 className="text-2xl font-bold mb-4 text-center">
              Welcome Back 👋
            </h2>

            <input
              type="text"
              placeholder="Email"
              className="w-full mb-3 px-4 py-2 rounded bg-slate-800 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 rounded bg-slate-800 outline-none"
            />

            <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded">
              Login
            </button>

          </div>
        </div>
      )}

    </nav>
    </div>
  );
}
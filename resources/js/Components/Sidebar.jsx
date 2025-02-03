import logo from "./Inventaris/logob.png";
import React from "react";
import { Link } from "@inertiajs/react";
const Sidebar = ({ children, user }) => {
    return (
        <div className="drawer drawer-mobile">
            <input
                id="sidebar-drawer"
                type="checkbox"
                className="drawer-toggle"
            />

            {/* Navbar and main content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-white p-3 shadow-md fixed top-0 left-0 right-0 z-50">
                    <div className="flex-1 px-4">
                        <label
                            htmlFor="sidebar-drawer"
                            className="btn btn-ghost hover:bg-base-400 text-black drawer-button mr-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                                />
                            </svg>
                        </label>
                        <div className="flex-1 text-center">
                            <Link href="/">
                            <img
                                src={logo}
                                alt="Logo GK"
                                className="h-10 inline-block"
                            /></Link>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex="0"
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Profile"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-white outline-1 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {!user ? (
                                    <div>
                                        <li>
                                            <Link
                                                href={route("login")}
                                                as="button"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("register")}
                                                as="button"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </div>
                                ) : (
                                    <div>
                                        <li>
                                            <Link
                                                href={route("dashboard")}
                                                as="button"
                                                className="justify-between"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>Settings</Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="POST"
                                                as="button"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div>{children}</div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side z-50">
                <label
                    htmlFor="sidebar-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay duration-300"
                />
                <div className="bg-white text-base-content min-h-full w-80 p-4 space-y-4 justify-between flex flex-col">
                    <nav className="menu divide-y divide-gray-700 p-2 m-2">
                        <header>
                            <h2 className="mb-4 text-2xl font-medium">Menu</h2>
                        </header>
                        <ul className="font-thin text-lg">
                            <li className=" transition-colors duration-300 my-2">
                                <a href="/" className="text-slate-900">
                                    Beranda
                                </a>
                            </li>
                            <li className=" transition-colors duration-300 mb-3 hover:bg-transparent">
                                <a href={route('dashboard')} className="text-slate-900">
                                    Dashboard
                                </a>
                            </li>
                            {!user ? (
                                <li
                                    onClick={() =>
                                        document
                                            .getElementById("Inventaris")
                                            .showModal()
                                    }
                                    className=" transition-colors duration-300 my-2"
                                >
                                    <a className="text-slate-900"> Inventaris</a>
                                </li>
                            ) : (
                                <li className=" transition-colors duration-300 my-2">
                                    <a href="report" className="text-slate-900">
                                        Inventaris
                                    </a>
                                </li>
                            )}

                            
                            <li className=" transition-colors duration-300 mb-3">
                                <Link
                                    href={route("logout")} method="POST" as="button"
                                    className="text-slate-900"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <footer>
                        <p className="text-xs text-gray-500 mt-2">
                            Made by Love.
                        </p>
                        <p className="text-xs text-gray-500">
                            Version 1.0.0 - Allghzl
                        </p>
                    </footer>
                </div>
                <dialog id="Inventaris" className="modal">
                    <div className="modal-box bg-white text-black font-bold">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <p className="py-4">Silahkan login terlebih dahulu</p>
                        <Link
                            href={route("login")}
                            as="button"
                            className="btn btn-block btn-primary text-base text-white px-6 py-1"
                        >
                            Login
                        </Link>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Sidebar;

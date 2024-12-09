export default function Nav() {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="text-black font-bold lg:text-3xl md:text-2xl text-xl">RecipeCalories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipe</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-x-4 flex">
                <label className="input input-bordered lg:flex md:flex hidden items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="rounded-3xl p-[10px] bg-[#0BE58A]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M20.9761 21.9668C20.0444 20.7333 18.8391 19.7329 17.455 19.0446C16.0709 18.3562 14.5459 17.9987 13.0001 18.0001C11.4543 17.9987 9.92924 18.3562 8.54515 19.0446C7.16106 19.7329 5.95571 20.7333 5.02406 21.9668M20.9761 21.9668C22.7941 20.3497 24.0762 18.2182 24.655 15.8549C25.2337 13.4916 25.0804 11.0082 24.2153 8.73407C23.3503 6.45992 21.8144 4.50246 19.8113 3.12129C17.8081 1.74012 15.4325 1.00049 12.9994 1.00049C10.5663 1.00049 8.19064 1.74012 6.18753 3.12129C4.18443 4.50246 2.6485 6.45992 1.78344 8.73407C0.918378 11.0082 0.76506 13.4916 1.34382 15.8549C1.92257 18.2182 3.20606 20.3497 5.02406 21.9668M20.9761 21.9668C18.7814 23.9243 15.9409 25.0043 13.0001 25.0001C10.0588 25.0046 7.21904 23.9246 5.02406 21.9668M17.0001 10.0001C17.0001 11.061 16.5786 12.0784 15.8285 12.8285C15.0783 13.5787 14.0609 14.0001 13.0001 14.0001C11.9392 14.0001 10.9218 13.5787 10.1716 12.8285C9.42149 12.0784 9.00006 11.061 9.00006 10.0001C9.00006 8.93923 9.42149 7.92181 10.1716 7.17167C10.9218 6.42152 11.9392 6.00009 13.0001 6.00009C14.0609 6.00009 15.0783 6.42152 15.8285 7.17167C16.5786 7.92181 17.0001 8.93923 17.0001 10.0001Z" stroke="#150B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>








    )
}
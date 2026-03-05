export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* LEFT */}
      <div className="navbar-start">
        
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <i className="fa-solid fa-bars text-lg"></i>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <a className="text-xl font-bold ml-2">
          CS — Ticket System
        </a>
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-end gap-4">
        
        {/* Hide on mobile */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
        </ul>

        <a className="btn flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-purple-500 text-white border-none">
          <i className="fa-solid fa-plus"></i>
          <span className="hidden sm:inline">New Ticket</span>
        </a>

      </div>

    </div>
  )
}
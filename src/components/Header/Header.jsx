import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("show__menu");
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Company Logo" />
          </div>

          {/* Navigation */}
          <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map(({ path, display }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] font-[600]"
                        : "text-textColor text-[16px] font-[600] hover:text-primaryColor"
                    }
                  >
                    {display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User & Menu Icons */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer hidden">
                <img
                  src={userImg}
                  className="w-full rounded-full"
                  alt="User Avatar"
                />
              </figure>
            </Link>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import search from "../../assets/icons/Search.svg";
import Button from "../Button/Button";
import home from "../../App";
import aboutMe from "../../pages/AboutMe";
import services from "../ServicesOur/ServicesOur";
import contactMe from "../ContactMe/ContactMe";
import weblog from "../Blogs/Blogs";

function Header() {
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowInput(!showInput);
  };
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handlePageClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };
  const listMenu = [
    { id: 1, title: "صفحه اصلی", src: home },
    { id: 2, title: "درباره ما", src: aboutMe },
    { id: 3, title: "خدمات ما", src: services },
    { id: 4, title: "تماس با ما", src: contactMe },
    { id: 5, title: "وبلاگ", src: weblog },
  ];
  return (
    <header
      className="m-2 bg-white rounded-full p-5 flex items-center justify-between md:fixed top-2 left-12 right-12 z-10"
      onClick={handlePageClick}
    >
      <div className="flex items-center gap-4">
        <div>
          <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-500  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold text-2xl">
            موسسه تجاری کامل
          </h2>
        </div>
        <div className="md:inline hidden">
          <ul className="flex items-center gap-4">
            {listMenu.map((listMenus) => {
              return (
                <li key={listMenus.id}>
                  <a
                    href={listMenus.src}
                    to={listMenus.src}
                    className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all cursor-pointer"
                  >
                    {listMenus.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleClick}
          className="hidden md:inline cursor-pointer"
        >
          <img src={search} alt={"search icon"} />
        </button>
        {showInput && (
          <input
            htmlFor="Search"
            placeholder="متن مورد نظر رو سرچ کنید"
            className="p-2 border-2 border-blue-600 rounded-xl"
          />
        )}
        <button
          onClick={handleMenuClick}
          className="inline md:hidden cursor-pointer"
        >
          <FaBars className="icon" />
        </button>
        <div className="hidden md:inline">
          <Button title="تماس با پشتیانی" />
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 left-0 h-screen w-1/2 flex flex-col justify-between p-2 bg-white  z-10">
          <div className="space-y-4">
            <div>
              <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-500  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold text-xl">
                موسسه تجاری کامل
              </h2>
            </div>
            <div className="">
              <ul className="flex flex-col gap-4">
                {listMenu.map((listMenus) => {
                  return (
                    <li key={listMenus.id}>
                      <a
                        href={listMenus.src}
                        className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all cursor-pointer"
                      >
                        {listMenus.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button title="تماس با پشتیانی" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

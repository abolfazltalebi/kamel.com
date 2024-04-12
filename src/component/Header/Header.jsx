import { useState } from "react";
import { FaBars } from "react-icons/fa";
import search from "../../assets/icons/Search.svg";
import Button from "../Button/Button";

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

  return (
    <header
      className="m-2 bg-white rounded-full p-4 flex items-center justify-between md:fixed top-2 left-24 right-24"
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
            <li>
              <a
                href=""
                className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
              >
                درباره ما
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
              >
                خدمات ما
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
              >
                تماس با ما
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
              >
                وبلاگ
              </a>
            </li>
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
        <button
          onClick={handleMenuClick}
          className="inline md:hidden cursor-pointer"
        >
          <FaBars className="icon" />
        </button>
        <div>
          <Button title="تماس با پشتیانی" />
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 left-0 h-screen w-1/2 flex flex-col justify-between p-2 bg-white  z-10">
          <div className="space-y-4">
            <div>
              <h2 className="bg-gradient-to-r from-[#175CFF] via-blue-500  to-[#FFC226] inline-block text-transparent bg-clip-text font-bold text-2xl">
                موسسه تجاری کامل
              </h2>
            </div>
            <div className="">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href=""
                    className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                  >
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                  >
                    درباره ما
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                  >
                    خدمات ما
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                  >
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:bg-blue-600 p-2 rounded-xl hover:text-white transition-all"
                  >
                    وبلاگ
                  </a>
                </li>
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

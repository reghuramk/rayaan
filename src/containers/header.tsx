import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-white-500 text-black shadow-md transition-all duration-300 py-10 sm:py-6 md:py-6 lg:py-6">
      <div className="w-full flex justify-between items-center px-10">
        {/* {Left-side-nav} */}
        <div className="flex space-x-10 sm:space-x-20">
            {/* {Company Logo} */}
          <a href="#" className="">
            <img className="h-10 w-35 transition-all duration-300" src="/rayaan.png" alt='logo'/>
          </a>
          <nav className="content-center hide-at-1088 font-opensans">
            <ul className="flex space-x-20">
              <li>
                <a href="#" className="underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Online
                </a>
              </li>
              <li className="hide-at-1215">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* {Right-side-nav} */}
        <nav className="content-center font-opensans">
          <ul className="flex space-x-5 sm:space-x-10">
            <li className="content-center">
              <a href="#" className="hover:underline"
              >
                Cart (0)
              </a>
            </li>
            <div className="flex items-center">
              <div className=" flex hide-at-1088">
                <a className="mr-2">
                  <Avatar>
                    <AvatarImage src="http://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </a>
                <li className="content-center">
                  {" "}
                  <a href="#" className="hover:underline">
                    Log in{" "}
                  </a>
                </li>
              </div>
              <svg
                className="w-8 h-8 hidden show-at-1088"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

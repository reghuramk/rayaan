import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-white-500 text-black py-6 shadow-md">
      <div className="w-full flex justify-between items-center px-10">
        <div className="flex space-x-20">
          <a href="#" className="">
            <img className="h-13 w-45" src="/rayaan.png" />
          </a>
          <nav className="content-center">
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
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="content-center">
          <ul className="flex space-x-20">
            <li className="content-center">
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <a className="mr-2">
              <Avatar>
                <AvatarImage src="http://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </a>
            <li className="content-center">Log in</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

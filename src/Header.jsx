import React from "react";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="container mx-auto " >
        <nav className="bg-gray-600 p-4 text-white flex justify-between rounded-b-2xl rounded-t">
          <Link to={"/dashboard"}>Dashboard</Link>

          <Link to={"/"}>Home</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;

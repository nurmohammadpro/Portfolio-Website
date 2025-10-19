import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Braces } from "lucide-react";

const generateId = () => {
  return crypto.randomUUID();
};

const navItems = [
  { id: generateId(), title: "About", path: "/about" },
  { id: generateId(), title: "Projects", path: "/projects" },
  { id: generateId(), title: "Skills", path: "/skills" },
  { id: generateId(), title: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <nav className="h-16 flex items-center justify-between">
        <div className="">
          <Link to="/" className="bg-surface">
            <Braces strokeWidth={4} className="text-primary" />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="items-center justify-center">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className="px-4 py-2 rounded-md focus:bg-subtle transition-colors duration-200 cursor-pointer"
              >
                <NavButton title={item.title} />
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

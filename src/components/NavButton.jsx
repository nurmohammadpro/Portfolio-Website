const NavButton = ({ title }) => {
  return (
    <button className="px-2 py-1 font-medium transition-all ease-in-out duration-300 bg-surface text-primary rounded-lg focus:shadow focus:shadow-bg-primary cursor-pointer">
      {title}
    </button>
  );
};

export default NavButton;

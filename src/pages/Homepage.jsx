import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const homepage = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto p-2">
        <Hero />
      </div>
    </div>
  );
};

export default homepage;

import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import Header from "./Header";

const Hero = ({ title }: { title: string }) => {
  return (
    <div className="hero">
      <Header />
      <div className="uppercase self-center">
        <h2 className="text-4xl text-center">{title}</h2>
        <ul className="text-xs flex gap-3 ">
          <li>Home</li>
          <li>About</li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>

      <div className=" rounded-full self-center border flex items-center ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search"
          className="py-2 px-4 rounded-full bg-transparent outline-none focus:backdrop-blur-md transition-all"
        />
        <BiSearch className="text-xl mx-2" />
      </div>

      <div className="2xl:hidden self-center">
        <Button />
      </div>
    </div>
  );
};

export default Hero;

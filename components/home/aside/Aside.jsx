import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="z-20 fixed md:top-[200px] md:right-[200px] bottom-4 right-4 flex flex-col gap-4">
      <div className="rounded-full text-white bg-[#3A466A] p-3 hover:bg-[#2a3555] transition-all duration-100 cursor-pointer">
        <FaInstagram />
      </div>
      <div className="rounded-full text-white bg-[#3A466A] p-3 hover:bg-[#2a3555] transition-all duration-100 cursor-pointe">
        <FaYoutube />
      </div>
    </aside>
  );
};

export default Aside;

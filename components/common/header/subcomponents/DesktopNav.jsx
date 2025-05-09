import NavLink from "./NavLink";

const DeskTopNav = () => {
  return (
    <ul className="hidden md:flex items-center gap-8">
      <NavLink link={"/story"} navName={"Story"} />
      <NavLink link={"/menu"} navName={"Menu"} />
      <NavLink link={"/store"} navName={"Store"} />
      <NavLink link={"/content"} navName={"Contents"} />
    </ul>
  );
};

export default DeskTopNav;

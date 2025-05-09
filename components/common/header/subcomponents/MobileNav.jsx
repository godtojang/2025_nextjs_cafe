import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <>
      <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
        <ul className="flex flex-col items-center gap-4 py-4">
          <NavLink link={"/story"} navName={"Story"} />
          <NavLink link={"/menu"} navName={"Menu"} />
          <NavLink link={"/store"} navName={"Store"} />
          <NavLink link={"/content"} navName={"Contents"} />
        </ul>
      </div>
    </>
  );
};

export default MobileNav;

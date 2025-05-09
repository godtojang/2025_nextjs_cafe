import Link from "next/link";

const NavLink = (props) => {
  return (
    <li className="text-gray-500 hover:text-sky-200 transition-all duration-200 font-medium text-lg">
      <Link href={props.link}>{props.navName}</Link>
    </li>
  );
};

export default NavLink;

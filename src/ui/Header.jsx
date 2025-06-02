import { HiMenu } from "react-icons/hi";
import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header({handleClick}) {
  const { isLoading } = useUser();

  return (
    <div className="col-span-2 md:col-span-1 bg-secondary-0 py-4 px-4 md:px-8 border-b border-secondary-200 flex">
      <li className="flex md:hidden">
        <button onClick={handleClick}>
          <HiMenu className="w-7 h-7 text-primary-900"></HiMenu>
        </button>
      </li>
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
      ${isLoading ? "blur-sm opacity-50" : ""}
      `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;

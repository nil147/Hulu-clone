import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const accountLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Top Rated" Icon={LightningBoltIcon} />
        <HeaderItem title="Action" Icon={BadgeCheckIcon} />
        <HeaderItem title="Library" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />

        <HeaderItem href="/userAccount" title="Account" Icon={UserIcon} />
      </div>
      <button onClick={accountLogout}>Log out</button>
      <Image
        
        className="object-contain items-center "
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png?fit=960%2C510"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

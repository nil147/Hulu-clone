import Image from "next/image"
import HeaderItem from "./HeaderItem"
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"



function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Top Rated" Icon={LightningBoltIcon} />
                <HeaderItem title="Action" Icon={BadgeCheckIcon} />
                <HeaderItem title="Comedy" Icon={CollectionIcon} />
                <HeaderItem title="Home" Icon={SearchIcon} />
                <HeaderItem title="Home" Icon={UserIcon} />
            </div>
            <Image className="object-contain items-center " src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png?fit=960%2C510"
                width={200} height={100} />

        </header>
    )
}

export default Header

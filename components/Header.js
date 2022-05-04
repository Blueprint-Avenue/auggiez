import Image from "next/image";
import logo from "../assets/logo/Aug2.png";
import HeaderItem from "./HeaderItem";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
function Header() {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			{/* Left Header */}
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem title="HOME" Icon={HomeIcon} />
				<HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
				<HeaderItem title="SEARCH" Icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" Icon={UserIcon} />
			</div>
			{/* Right Header */}
			<Image className="object-contain" src={logo} width={200} height={200} />
		</header>
	);
}

export default Header;

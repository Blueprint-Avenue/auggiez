import Image from "next/image";
import logo from "../assets/logo/Aug2.png";

export const Header = () => {
	return (
		<header>
			<h1>Header</h1>
			<Image className="object-contain" src={logo} width={200} height={200} />
		</header>
	);
};

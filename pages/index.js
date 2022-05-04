import Head from "next/head";
import {Header} from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Auggiez</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Header */}
			<Header />
			{/* Navbar */}
			<Navbar />
			{/* Body */}
		</div>
	);
}

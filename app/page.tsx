"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
	const [countries, setCountries] = useState<Country[] | null>(null);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) =>
				data.sort(
					(a: { name: { common: string } }, b: { name: { common: string } }) =>
						a.name.common.localeCompare(b.name.common),
				),
			)
			.then((data) => {
				console.log("🚀 ~ .then ~ data:", data);
				setCountries(data);
			})
			.catch((error) => console.log(error));
	}, []);
	console.log("🚀 ~ .then ~ countries:", countries);

	return (
		<main>
			<Navbar />
			<div className="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{countries?.map((country: Country) => (
					<div key={country?.ccn3}>
						<h2>{country.name.common}</h2>
						<Image
							src={country.flags.svg}
							alt={`${country.name.common} flag`}
							width={100}
							height={100}
							objectFit="contain"
							loading="lazy"
						/>
					</div>
				))}
			</div>
		</main>
	);
}

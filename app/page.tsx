import Image from "next/image";
import Navbar from "./components/Navbar";

interface Country {
	ccn3: string;
	name: { common: string };
	flags: { svg: string };
}

export default async function Home() {
	// Fetch the data directly in the server component
	const response = await fetch("https://restcountries.com/v3.1/all");
	const data: Country[] = await response.json();

	// Sort the countries array by country.name.common
	const sortedCountries = data.sort((a, b) =>
		a.name.common.localeCompare(b.name.common),
	);

	return (
		<main>
			<Navbar />
			<div className="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{sortedCountries.map((country) => (
					<div key={country.ccn3}>
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

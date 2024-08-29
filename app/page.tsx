import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const data: Country[] = await response.json();
	const sortedCountries = data.sort((a, b) =>
		a.name.common.localeCompare(b.name.common),
	);

	return (
		<main>
			<div className="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{sortedCountries.map((country) => (
					<Link
						key={country.ccn3}
						href={`/countries/${encodeURIComponent(country.name.common)}`}
					>
						<h2>{country.name.common}</h2>
						<Image
							src={country.flags.svg}
							alt={`${country.name.common} flag`}
							width={200}
							height={200}
							objectFit="contain"
							loading="lazy"
						/>
					</Link>
				))}
			</div>
		</main>
	);
}

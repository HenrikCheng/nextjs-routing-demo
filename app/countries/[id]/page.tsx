import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

async function fetchCountry(id: string): Promise<Country[]> {
	const res = await fetch(`https://restcountries.com/v3.1/name/${id}`, {
		next: { revalidate: 86400 },
	});
	if (!res.ok) {
		throw new Error("Failed to fetch user");
	}
	return res.json();
}

const CountryPage: FC<CountriesPageProps> = async ({ params }) => {
	const country = await fetchCountry(params.id);
	const countryData = country[0];

	return (
		<main className="p-6 max-w-2xl mx-auto">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-4">{countryData.name.common}</h1>
				<div className="relative h-48 w-full mb-4">
					<Image
						src={countryData.flags.svg}
						alt={`flag of ${countryData.name.common}`}
						layout="fill"
						objectFit="contain"
						sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px" // Responsive image sizes
					/>
				</div>
			</div>
			<div className="rounded-lg shadow-md p-6">
				<h2 className="text-xl font-semibold mb-2">Country Details</h2>
				<ul className="space-y-2">
					<li>
						<strong>Official Name:</strong> {countryData.name.official}
					</li>
					<li>
						<strong>Capital:</strong> {countryData.capital.join(", ")}
					</li>
					<li>
						<strong>Region:</strong> {countryData.region}
					</li>
					<li>
						<strong>Population:</strong>{" "}
						{countryData.population.toLocaleString()}
					</li>
					<li>
						<strong>Languages:</strong>{" "}
						{Object.values(countryData.languages).join(", ")}
					</li>
					<li>
						<strong>Currencies:</strong>{" "}
						{Object.values(countryData.currencies)
							.map((currency) => `${currency.name} (${currency.symbol})`)
							.join(", ")}
					</li>
				</ul>
			</div>
			<div className="mt-6 text-center">
				<Link className="text-blue-500 hover:text-blue-700" href="/" passHref>
					Go back to home
				</Link>
			</div>
		</main>
	);
};

export default CountryPage;

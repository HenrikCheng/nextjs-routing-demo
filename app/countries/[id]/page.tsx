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

const UserPage: FC<CountriesPageProps> = async ({ params }) => {
	const country = await fetchCountry(params.id);

	return (
		<main>
			<div className="relative">
				<h1>{country[0].name.common}</h1>
				<Image
					src={country[0].flags.svg}
					alt={`flag of ${country[0].name.common}`}
					layout="fill"
					objectFit="contain"
					sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px" // Responsive image sizes
				/>
			</div>
			<Link href="/">
				Go back to home
			</Link>
			{JSON.stringify(country, null, 2)}
		</main>
	);
};

export default UserPage;

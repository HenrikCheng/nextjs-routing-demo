interface Country {
	name: Name;
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: Record<string, Currency>;
	idd: Idd;
	capital: string[];
	altSpellings: string[];
	region: string;
	languages: Record<string, string>;
	translations: Record<string, Translation>;
	latlng: number[];
	landlocked: boolean;
	area: number;
	demonyms: Record<string, Demonym>;
	flag: string;
	maps: Maps;
	population: number;
	car: Car;
	timezones: string[];
	continents: string[];
	flags: Flags;
	coatOfArms: Record<string, string>;
	startOfWeek: string;
	capitalInfo: CapitalInfo;
}

interface Name {
	common: string;
	official: string;
	nativeName: Record<string, NativeName>;
}

interface NativeName {
	official: string;
	common: string;
}

interface Currency {
	name: string;
	symbol: string;
}

interface Idd {
	root: string;
	suffixes: string[];
}

interface Translation {
	official: string;
	common: string;
}

interface Demonym {
	f: string;
	m: string;
}

interface Maps {
	googleMaps: string;
	openStreetMaps: string;
}

interface Car {
	signs: string[];
	side: string;
}

interface Flags {
	png: string;
	svg: string;
}

interface CapitalInfo {
	latlng: number[];
}

import Link from "next/link";

export default function Country({ params }: { params: { country_name: string } }) {

    const validCountries = ['Pakistan', 'India', 'Russia', 'China', 'Japan'];
    const countriesWithNoData = ['Germany', 'Newyork']; 


    const countryExists = validCountries.includes(params.country_name);
    const countryNoData = countriesWithNoData.includes(params.country_name);


    return (
        <div >
             {countryExists ? (
                <h1>Country Name: {params.country_name}</h1>
            ) : countryNoData ? (
                <h1>No data found for: {params.country_name}</h1>
            ) : (
                <h1>Country not recognized: {params.country_name}</h1>
            )}
            <ul className="text-center bg-green-200 p-12">
                {validCountries.map((country) => (
                    <li key={country}>
                        <Link href={`/country/${country}`}>{country}</Link>
                    </li>
                ))}
                {countriesWithNoData.map((country) => (
                    <li key={country}>

                        <span className="text-gray-500 cursor-not-allowed">{country} (Data not found)</span>
                    </li>
                ))}
            </ul>
           
        </div>
    );
}

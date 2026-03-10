function CountryCard({country}){

    return(

        <div className="border p-3 rounded">

            <img src={country.flags.png} alt="" className="w-full h-32 object-cover"/>

            <h3 className="font-bold mt-2">{country.name.common}</h3>

            <p>Capital : {country.capital ? country.capital[0] : "N/A"}</p>

            <p>Population : {country.population}</p>

            <p>Region : {country.region}</p>

        </div>

    )

}

export default CountryCard
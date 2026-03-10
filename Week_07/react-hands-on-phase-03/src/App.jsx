import { useState,useEffect } from "react"
import SearchBar from "./components/SearchBar"
import CountryList from "./components/CountryList"

function App(){

    let [countries,setCountries] = useState([])
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState("")
    let [query,setQuery] = useState("")

    useEffect(()=>{

        fetchCountries()

    },[])

    async function fetchCountries(){

        setLoading(true)
        setError("")

        try{

            let response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region")

            let data = await response.json()

            setCountries(data)

        }
        catch(err){

            setError("Failed to fetch countries")

        }

        setLoading(false)

    }

    function handleSearch(value){

        setQuery(value)

    }

    let filteredCountries = countries.filter(country=>{

        return country.name.common
        .toLowerCase()
        .includes(query.toLowerCase())

    })

    return(

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-4">
                Country Explorer
            </h1>

            <SearchBar onSearch={handleSearch}/>

            {loading && <p>Loading countries...</p>}

            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error &&

                <CountryList countries={filteredCountries}/>

            }

        </div>

    )

}

export default App
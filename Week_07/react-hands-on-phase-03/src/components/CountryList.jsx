import CountryCard from "./CountryCard"

function CountryList({countries}){

    if(countries.length === 0){
        return <p>No Countries Found</p>
    }

    return(

        <div className="grid grid-cols-4 gap-4">

            {countries.map((country,index)=>{

                return(

                    <CountryCard
                        key={index}
                        country={country}
                    />

                )

            })}

        </div>

    )

}

export default CountryList
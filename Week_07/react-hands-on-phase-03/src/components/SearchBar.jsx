import { useRef,useEffect } from "react"

function SearchBar({onSearch}){

    let inputRef = useRef(null)
    let timerRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    function handleChange(e){

        let value = e.target.value
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(()=>{
            onSearch(value)
        },500)

    }

    return(

        <div className="mb-4">

            <input
                type="text"
                placeholder="Search country..."
                ref={inputRef}
                onChange={handleChange}
                className="border p-2 w-full"
            />

        </div>

    )

}

export default SearchBar
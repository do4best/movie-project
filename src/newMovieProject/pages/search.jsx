import {useSearchParams} from "react-router-dom";
import thefetchuse from "../hooks/thefetchuse.jsx";
import {Cards} from "./Cards.jsx";

export function Search(apiPath) {
    const [searchParam] = useSearchParams()
    const queryTerm = searchParam.get("q")
    const{data:showMovies} = thefetchuse(apiPath,queryTerm)



    return (<main>
            <section className={"py-7"}>
                <p className={"text-3xl text-gray-700 dark:text-white"}>{showMovies === 0 ?`No Result Found for ${queryTerm}`:`Result for ${queryTerm}`}</p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap ">
                    {showMovies.map((movie) => {

                        {return( <span key={movie.id}> <Cards movies={movie}/></span>)}
                    })}
                </div>



            </section>


        </main>
    )


}
export default Search;
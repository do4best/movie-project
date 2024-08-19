
import {Cards} from "./Cards.jsx";

import thefetchuse from "../hooks/thefetchuse.jsx";
import PropTypes from "prop-types";
import {useEffect} from "react";
import React from 'react'
export function MovieList({apiPath,title}) {

const{data:showMovies} = thefetchuse({apiPath})

    useEffect(() => {
        document.title = `${title} Ravi Movies`
    } );


    return (<main>
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
MovieList.propTypes={
    apiPath:PropTypes.any,
    title:PropTypes.any
}

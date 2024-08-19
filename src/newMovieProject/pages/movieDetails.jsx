import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import React from 'react'
import backup from '../assets/images/backup.png'

export function MovieDetails() {
    const params = useParams()
    const [movieData,setMovieData] = useState({})
    const back_drop_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchMovie(){
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=c394922375334d374c45e8ffacbc0092`)
            const json =await response.json()
            setMovieData(json)
            console.log(json)
        }
        fetchMovie()

    }, []);

    const image = movieData.poster_path?`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`:backup
    console.log(image)
    return (
        <main>
            <section className={"flex justify-around flex-wrap py-5"} style={{ height:"100vh",width:"100vw",background:movieData?`linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${back_drop_url}${movieData.backdrop_path}") no-repeat center / cover`:"black"}}>
                <div className={"max-w-sm"}>
                    <img className={"rounded"} src={image} alt={movieData.title}/>
                </div>
                <div className={"max-w-2xl text-gray-700 text-lg dark:text-white"}>
                    <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movieData.title}</h1>
                    <p className="my-4">{movieData.overview}</p>
                    {movieData.genres ? (<p className="my-7 flex flex-wrap gap-2">
                        {movieData.genres.map((gener) => (
                            <span className={"mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"}
                                  key={gener.id}></span>
                        ))}
                    </p>) : ""}

                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>

                        <p className="ml-2  text-gray-900 dark:text-white">{movieData.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-gray-900  dark:text-white">{movieData.vote_count}
                                </span>
                    </div>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Runtime:</span>
                        <span>{movieData.runtime} min.</span>
                    </p>





                    <p className="my-4">
                        <span className="mr-2 font-bold">Release Date:</span>
                        <span>{movieData.release_date}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">IMDB Code:</span>
                        <a href={`https://www.imdb.com/title/${movieData.imdb_id}`} target="_blank"
                           rel="noreferrer">{movieData.imdb_id}</a>
                    </p>
                </div>
            </section>


        </main>
    );
}

export default MovieDetails;
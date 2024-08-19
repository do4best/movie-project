import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import backupimage from '../assets/images/backup.png'
export function Cards({movies}) {
const{id,original_title,poster_path,overview} = movies;
const imagesFind = poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:backupimage;
    return (<main>


        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg" src={imagesFind} alt=""/>
            </Link>
            <div className="p-5">
                <Link to={`/movie/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-500">{original_title}</h5>
                </Link>
                <p className="mb-auto font-normal text-gray-700 dark:text-gray-400">{overview}</p>

            </div>
        </div>
    </main>)


}

Cards.propTypes = {
    movies: PropTypes.any
}
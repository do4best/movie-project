import {useEffect, useState} from 'react';

import PropTypes from "prop-types";

import {api_key, now_playing} from "../apiHandeling/config.js";
function Thefetchuse({apiPath},queryTerm="") {
    const [data,setData] = useState([])

const url =`${now_playing}${apiPath}${api_key}&query=${queryTerm}`

    useEffect(() => {

        async  function FetchMovies(){



            const response = await fetch(url)
            const data = await response.json()
            setData(data.results)



    }
        FetchMovies()}, [url]);
    return {data};
}

export default Thefetchuse;
Thefetchuse.propTypes={
    url:PropTypes.any
}
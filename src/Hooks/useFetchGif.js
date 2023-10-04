import { useEffect, useState } from "react";
import {getGif} from '../helpers/GetGifs'


export const useFetchGif = ( category ) => {
    const [state, setstate] = useState({
        data : [],
        loading : true,
    })

     useEffect( () => {getGif( category ).then(images => 
        {
            console.log(images);
            setstate({
            data:images,
            loading: false,
    })

    });

    },    
    [category]);


    return state;
}
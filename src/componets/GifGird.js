import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { GifGirdItem } from './GifGirdItem';
import { useFetchGif } from '../Hooks/useFetchGif';
// import { getGif } from '../helpers/GetGifs';

const GifGird =  ({category}) => {


    const {data:images , loading} = useFetchGif( category );

    
    // const [images, setimages] = useState([])

  


  return (
    <>
        <h3 className='animate__animated animate__fadeInDown'>{category}</h3>
        { loading && <p className='animate__animated animate__flash'>Loading...</p>}
    <div className='card_grid'>
            {
              images.map( (image) => (
                <GifGirdItem 
                key = {image.id}
                {...image}
                />
                ))
              }
    </div>
              </>
  )
}

GifGird.propTypes = {}

export default GifGird
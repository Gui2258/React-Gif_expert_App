import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './componets/AddCategory'
import GifGird from './componets/GifGird'

const GifExpertApp = props => {


    const apikey = '1F9JbBJ3NmuNlOQVGfUXyhsMlNUQm9ip'

  // const categories = ['one punch', 'one piece', 'snk']

  
  const [categories, setcategories] = useState(['one piece'])
  
  const handeleAdd = () => {
    setcategories(categories.concat( 'kny'))
  }
  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr/>
        {/* <button onClick={handeleAdd}>Añadir</button> */}
        <ol>
          {
          categories.map( category=>
           (<GifGird 
            category={category}
            key={category}
            />)
          )
          }
        </ol>

    </div>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp
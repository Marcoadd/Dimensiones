import React from 'react'

const LocationInf = ({dimension}) => {

  return (
    <article className='descriptionDimension'>
      <h3>{dimension?.name}</h3>
      <div className='descriptionDimensionList'>
      <ul>
        <li><span>Tipo:</span><br />{dimension?.type}</li>
        <li><span>Dimensión:</span><br />{dimension?.dimension}</li>
        <li><span>Poblacion:</span><br />{dimension?.residents.length}</li>
      </ul>
      </div>
    </article>
  )
}

export default LocationInf
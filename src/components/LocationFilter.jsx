import axios from 'axios'
import React, { useEffect, useState } from 'react'


const LocationFilter = ({changeInut, getNewLocation}) => {

  const [locationOptions, setLocationOption] = useState()

  useEffect(() => {
    if(!changeInut)  return setLocationOption ()
    const URL =`https://rickandmortyapi.com/api/location?name=${changeInut}`
    axios.get (URL)
      .then(res =>setLocationOption(res.data.results))
      .catch(err =>console.log(err))

  }, [changeInut])
  

  return (
  
      <ul className='listFilter'>
      {
        locationOptions?.map(locationOption => <li onClick={() => getNewLocation(locationOption.url, locationOption.name)} key={locationOption.url}>{locationOption.name}</li>)
      }
    </ul>
  
  )
}

export default LocationFilter
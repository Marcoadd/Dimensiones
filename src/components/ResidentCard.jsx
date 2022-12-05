import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ResidentCard = ({urlResident}) => {

 

  const [resident, setResident] = useState()
 
  useEffect(() => {
    axios.get(urlResident)
    .then(res =>setResident(res.data))
    .catch(err => console.log(err))
  }, [])
  
  console.log(resident)
  return (
    <article className='residentCard'> 
     <header className='residentCardStatus'>
      <img src={resident?.image} alt="" />
      <div className='status'>
        <div className={`circle ${resident?.status}`}></div>
        <span>{resident?.status}</span>
      </div>
      </header>
      <section className='residentCardInfo'>
        <h2>{resident?.name}</h2>
        <ul>
          <li><span>Raza</span> <br />{resident?.species}</li>
          <li><span>Origen</span> <br />{resident?.origin.name}</li>
          <li><span>Aparicion en Episodios </span><br />{resident?.episode.length}</li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard
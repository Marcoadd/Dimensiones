import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({dimension}) => {
  return (
    <div className='residentList'>
       {
            dimension?.residents.map ( urlResident =>  <ResidentCard key={urlResident} urlResident={urlResident} />)
          }
    </div>
  )
}

export default ResidentList
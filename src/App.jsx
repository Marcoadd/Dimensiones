import getRandom from './utils/getRandom'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LocationInf from './components/LocationInf'
import ResidentList from './components/ResidentList'
import LocationFilter from './components/LocationFilter'
import ErrorMessage from './components/ErrorMessage'


function App() {
  const [dimension, setDimension] = useState()
  const [changeInut, setChangeInut] = useState('')
  const [showError, setShowError] = useState(false)

  const getDataDimension = (idData) => {
    if (!idData) return
    const URL =`https://rickandmortyapi.com/api/location/${idData}`
    axios.get (URL)
      .then(res =>setDimension(res.data))
      .catch(err =>{
        setShowError(true)
        setTimeout(() => {
          setShowError(false)
        }, 2000)
        console.log(err)
      })
  }
  
  useEffect(() => {
    const randomDimension = getRandom()
    getDataDimension(randomDimension)

  }, [])
  
  const submit = (e) => {
    e.preventDefault()
    const newDimension = e.target.searchValue.value
    getDataDimension(newDimension)
  }
  
  const changeInput = (e) => {
    setChangeInut(e.target.value)

  }

  const getNewLocation = (URL, name) => {
    setChangeInut(name)
    axios.get(URL)
      .then(res => setDimension(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='headSearch'>
      <form onSubmit={submit}>
        <input type="text" value={changeInut} placeholder='busca tu dimension'  id='searchValue' onChange={changeInput}/>
        <button type='submit' >Buscar</button>
        {
          showError ? <ErrorMessage /> : ''
        }
      </form>
      <LocationFilter changeInut= {changeInut} getNewLocation={getNewLocation}/>
      </div>

      <div className='bodyInf'>
        <LocationInf dimension={dimension}/>
        <ResidentList dimension = {dimension} />
        </div>
    </div>
  )
}

export default App

import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


const fetchCountries=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {

  return (
    <>
       
        <div>
          {/* <h1>Get started</h1> */}
          <Suspense fallback={<h3>Loading Countries...</h3>}>
          <Countries fetchCountries={fetchCountries}></Countries>

          </Suspense>
        </div>
       

      

     
    </>
  )
}

export default App

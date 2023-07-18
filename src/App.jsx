import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increment = ()=>{
    setCount(count+1)
  }

  const Decrement = ()=>{
    if (count>0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className='background'>
        <div className='innerContainer'>
            <h2 className='count'> {count} </h2>

            <div className='logic'>
              <div className="btn" onClick={Increment}>
                Increment
              </div>

              <div className="btn" onClick={Decrement}>
                Decrement
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App

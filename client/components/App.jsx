import React, { useEffect } from 'react'
import { getFruits } from '../apiClient'

function App() {
  useEffect(() => {
    getFruits()
      .then((fruits) => {
        console.log(fruits.body)
      })
      .catch((err) => console.error(err.message))
  })
  return (
    <div>
      <h1>This is a template with fruits!</h1>
    </div>
  )
}

export default App

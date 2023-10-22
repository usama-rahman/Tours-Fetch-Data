import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [toues, setTours] = useState([]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>

    </>
  )
}

export default App

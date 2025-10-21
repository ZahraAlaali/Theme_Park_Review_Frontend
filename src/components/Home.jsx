import { useState, useEffect } from "react"
import axios from "axios"
import ShowRides from "./ShowRides"

const Home = () => {
  const [rides, setRides] = useState(null)
  useEffect(() => {
    const getRides = async () => {
      const allRides = await axios.get("http://localhost:3000/rides")
      setRides(allRides.data)
    }
    getRides()
  }, [])

  return (
    <div>
      {rides?.map((ride) => (
        <ShowRides key={ride._id} ride={ride} />
      ))}
    </div>
  )
}

export default Home

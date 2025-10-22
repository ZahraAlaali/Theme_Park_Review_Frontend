import { useState, useEffect } from "react"
import axios from "axios"
import ShowRides from "./ShowRides"
import { NavLink } from "react-router-dom"

const Home = () => {
  const [rides, setRides] = useState(null)
  useEffect(() => {
    const getRides = async () => {
      const allRides = await axios.get(
        "https://theme-park-review-backend.onrender.com/rides"
      )
      setRides(allRides.data)
    }
    getRides()
  }, [])

  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/addRide"}>Add Game/Ride</NavLink>
      </nav>
      <div className="container">
        {rides?.map((ride) => (
          <ShowRides key={ride._id} ride={ride} />
        ))}
      </div>
    </>
  )
}

export default Home

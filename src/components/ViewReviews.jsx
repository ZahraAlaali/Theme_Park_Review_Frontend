import { useParams, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import ViewReview from "./ViewReview"

const ViewReviews = () => {
  let { rideId } = useParams()
  const [reviews, setReviews] = useState(null)
  const [rideInfo, setRideInfo] = useState({})

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(`http://localhost:3000/rating/${rideId}`)
      setReviews(response.data)
      const ride = await axios.get(`http://localhost:3000/rides/${rideId}`)
      setRideInfo({
        name: ride.data.name,
        image: ride.data.image,
        description: ride.data.description,
      })
    }
    getReviews()
  }, [])

  return (
    <>
      <nav>
        <NavLink to={`/addReview/${rideId}`}>Add Review</NavLink>
      </nav>
      <div>
        <img src={rideInfo?.image} alt={rideInfo?.name} />
        <h1>{rideInfo?.name}</h1>
        <p>{rideInfo?.description}</p>
      </div>
      <div>
        {reviews?.map((review) => (
          <ViewReview key={review._id} review={review} />
        ))}
      </div>
    </>
  )
}
export default ViewReviews

import { useParams } from "react-router-dom"
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
      setRideInfo({
        name: response.data[0].rideId.name,
        image: response.data[0].rideId.image,
        description: response.data[0].rideId.description,
      })
    }
    getReviews()
  }, [])

  return (
    <>
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

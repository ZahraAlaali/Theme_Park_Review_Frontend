import { useParams, NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import ViewReview from "./ViewReview"

const ViewReviews = () => {
  let navigate = useNavigate()
  let { rideId } = useParams()
  const [reviews, setReviews] = useState(null)
  const [rideInfo, setRideInfo] = useState({})

  const deleteRide = async () => {
    const response = await axios.delete(
      `http://localhost:3000/rides/${rideInfo.id}`
    )
    if (response.status === 200) {
      navigate("/")
    }
  }

  useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(`http://localhost:3000/rating/${rideId}`)
      setReviews(response.data)
      const ride = await axios.get(`http://localhost:3000/rides/${rideId}`)
      setRideInfo({
        id: ride.data._id,
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
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={`/addReview/${rideId}`}>Add Review</NavLink>
      </nav>
      <div className="view">
        <img className="img" src={rideInfo?.image} alt={rideInfo?.name} />
        <h1>{rideInfo?.name}</h1>
        <p>{rideInfo?.description}</p>
        <button onClick={deleteRide}>Delete Game</button>
      </div>
      <div className="reviews">
        {reviews?.map((review, index) => (
          <ViewReview
            key={review._id}
            index={index}
            review={review}
            setReviews={setReviews}
            reviews={reviews}
          />
        ))}
      </div>
      <button onClick={() => navigate("/")}>Back To Home Page</button>
    </>
  )
}
export default ViewReviews

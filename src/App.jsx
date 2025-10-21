import "./App.css"
import axios from "axios"
import Review from "./components/Review"
import { useState, useEffect } from "react"

const App = () => {
  const [reviews, setReviews] = useState()

  useEffect(() => {
    const getReviews = async () => {
      try {
        let response = await axios.get("http://localhost:3001/")
        setReviews(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getReviews()
  }, [])

  return (
    <>
      <Review reviews={reviews} setReviews={setReviews} />
      <h1>Issues:</h1>
      {reviews?.map((review) => (
        <div key={review._id}>
          <h3>Type: {review.rateRide}</h3>
          <p>Subject: {review.subject}</p>
          <p>Review: {review.msg}</p>
        </div>
      ))}
    </>
  )
}

export default App


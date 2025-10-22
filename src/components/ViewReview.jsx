import axios from "axios"
import { useState } from "react"

const ViewReview = ({ review, setReviews, reviews, index }) => {
  const deleteReview = async (event) => {
    event.preventDefault()
    const response = await axios.delete(
      `http://localhost:3000/rating/${review.rideId}/${review._id}`
    )
    if (response.status === 200) {
      let reviewList = [...reviews]
      reviewList.splice(index, 1)
      setReviews(reviewList)
    }
  }

  return (
    <>
      <div>
        <h3>{review.username ? review.username : "Anonymous"}</h3>
        <h3>{review.rating}</h3>
        <p>{review.review}</p>
      </div>
      <button onClick={deleteReview}>Delete Review</button>
    </>
  )
}
export default ViewReview

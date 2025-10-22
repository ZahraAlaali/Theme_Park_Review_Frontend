import axios from "axios"
import { useState } from "react"

const ViewReview = ({ review, setReviews, reviews, index }) => {
  const deleteReview = async (event) => {
    event.preventDefault()
    const response = await axios.delete(
      `https://theme-park-review-backend.onrender.com/rating/${review.rideId}/${review._id}`
    )
    if (response.status === 200) {
      let reviewList = [...reviews]
      reviewList.splice(index, 1)
      setReviews(reviewList)
    }
  }

  return (
    <div>
      <div>
        <h3 className="header">
          {review.username ? review.username : "Anonymous"}
        </h3>
        <h3 className="header">Rating: {review.rating}</h3>
        <p>Review: {review.review}</p>
      </div>
      <button onClick={deleteReview}>Delete Review</button>
    </div>
  )
}
export default ViewReview

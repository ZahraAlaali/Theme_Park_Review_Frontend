import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Review = () => {
  let { rideId } = useParams()
  const initialState = {
    username: "",
    rating: "0",
    review: "",
    rideId: rideId,
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post(
      `http://localhost:3000/rating/${rideId}`,
      formState
    )
    // let reviewList = [...reviews]
    // reviewList.push(response.data)
    // setReviews(reviewList)
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usename (not Required):</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={formState.username}
      />
      <br />

      <label htmlFor="rating">Rate the Ride:</label>
      <select name="rating" onChange={handleChange} value={formState.rating}>
        <option value="0">Not worthy of Rating</option>
        <option value="1">One Star</option>
        <option value="2">two Star</option>
        <option value="3">Three Star</option>
        <option value="4">Four Star</option>
        <option value="5">Five Star</option>
      </select>
      <br />

      <textarea
        name="review"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.review}
      ></textarea>
      <button type="submit">Add Review</button>
    </form>
  )
}
export default Review

import { useState, useEffect } from "react"
import axios from "axios"

const Review = ({ reviews, setReviews }) => {
  const initialState = {
    rateRide: "",
    subject: "",
    review: "",
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/", formState)
    let reviewList = [...reviews]
    reviewList.push(response.data)
    setReviews(reviewList)
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rateRide">Rate the Ride:</label>
      <select
        name="rateRide"
        onChange={handleChange}
        value={formState.rateRide}
      >
        <option value="" disabled defaultValue>
          Select Issue Type
        </option>
        <option value="zero">Not worthy of Rating</option>
        <option value="oneStar">One Star</option>
        <option value="twoStar">two Star</option>
        <option value="threeStar">Three Star</option>
        <option value="fourStar">Four Star</option>
        <option value="fiveStar">Five Star</option>
      </select>
      <br />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        name="subject"
        onChange={handleChange}
        value={formState.subject}
      />
      <br />
      <label htmlFor="msg">Review</label>
      <textarea
        name="msg"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.msg}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}
export default Review

import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ViewReviews from "./components/ViewReviews"
import Ride from "./components/Ride"
import Review from "./components/Review"

import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {
  // const [reviews, setReviews] = useState()

  // useEffect(() => {
  //   const getReviews = async () => {
  //     try {
  //       let response = await axios.get("http://localhost:3001/")
  //       setReviews(response.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   getReviews()
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addRide" element={<Ride />} />
        <Route path="/addReview/:rideId" element={<Review />} />
        <Route path="/ride/:rideId" element={<ViewReviews />} />
      </Routes>
      {/* <Review reviews={reviews} setReviews={setReviews} />
      <h1>Issues:</h1>
      {reviews?.map((review) => (
        <div key={review._id}>
          <h3>Type: {review.rateRide}</h3>
          <p>Subject: {review.subject}</p>
          <p>Review: {review.msg}</p>
        </div>
      ))} */}
    </>
  )
}

export default App

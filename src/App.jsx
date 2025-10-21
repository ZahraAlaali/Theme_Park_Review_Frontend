import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ViewReviews from "./components/ViewReviews"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ride/:rideId" element={<ViewReviews />} />
      </Routes>
    </>
  )
}

export default App

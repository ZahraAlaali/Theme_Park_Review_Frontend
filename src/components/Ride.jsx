import { useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

const Ride = () => {
  const initialState = {
    name: "",
    image: "",
    description: "",
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/rides", formState)
    // let issueList = [...issues]
    // issueList.push(response.data)
    // setIssues(issueList)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />

        <label htmlFor="image">Image:</label>
        <input
          required
          type="text"
          name="image"
          onChange={handleChange}
          value={formState.image}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.description}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default Ride

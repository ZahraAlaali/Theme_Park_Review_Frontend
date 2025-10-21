import { Link } from "react-router-dom"

const ShowRides = ({ ride }) => {
  return (
    <>
      <Link to={`/ride/${ride._id}`}>
        <div>
          <img src={ride.image} alt={ride.name} />
          <h3>{ride.name}</h3>
        </div>
      </Link>
    </>
  )
}
export default ShowRides

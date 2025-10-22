import { Link } from "react-router-dom"

const ShowRides = ({ ride }) => {
  return (
    <div className="page">
      <Link to={`/ride/${ride._id}`}>
        <div>
          <img src={ride.image} alt={ride.name} />
          <h3>{ride.name}</h3>
        </div>
      </Link>
    </div>
  )
}
export default ShowRides

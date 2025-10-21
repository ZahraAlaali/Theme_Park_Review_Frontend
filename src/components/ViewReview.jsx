const ViewReview = ({ review }) => {
  return (
    <div>
      <h3>{review.username ? review.username : "Anonymous"}</h3>
      <h3>{review.rating}</h3>
      <p>{review.review}</p>
    </div>
  )
}
export default ViewReview

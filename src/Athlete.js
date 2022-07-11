const Athlete = ({ activities }) => {
  return (
    <div>
      <p>ID: {activities.id}</p>
      <p>First Name: {activities.firstname}</p>
      <p>Last Name: {activities.lastname}</p>
      <p>Bio: {activities.bio}</p>
      <p>Weight: {activities.weight}</p>
      <p>City: {activities.city}</p>
      <p>State: {activities.state}</p>
      <p>Country: {activities.country}</p>
      <p>Premium: {activities.premium}</p>
      <p>Updated Last: {activities.updated_at}</p>
      <div className="image-container">
        <img src={activities.profile} alt={activities.firstname} />
      </div>
    </div>
  );
};

export default Athlete;

const Athlete = ({
  activities: {
    id,
    firstname,
    lastname,
    bio,
    weight,
    city,
    state,
    country,
    premium,
    updated_at,
    profile,
  },
}) => {
  return (
    <div>
      <p htmlFor="id">ID: {id}</p>
      <p htmlFor="firstname">First Name: {firstname}</p>
      <p htmlFor="lastname">Last Name: {lastname}</p>
      <p htmlFor="bio">Bio: {bio}</p>
      <p htmlFor="weight">Weight: {weight}</p>
      <p htmlFor="city">City: {city}</p>
      <p htmlFor="state">State: {state}</p>
      <p htmlFor="country">Country: {country}</p>
      <p htmlFor="premium">Premium: {premium}</p>
      <p htmlFor="update_at">Updated At: {updated_at}</p>
      <div>
        <img src={profile} alt={firstname} />
      </div>
    </div>
  );
};

export default Athlete;

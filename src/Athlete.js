const Athlete = ({
  activities: { firstname, lastname, city, state, country, profile },
}) => {
  return (
    <div className="mt-7 p-10 bg-slate-200 rounded-md">
      <div className="float-right">
        <img src={profile} alt={firstname} />
      </div>
      <p className="font-bold">Athlete Details</p>
      <p htmlFor="firstname">
        Name: {firstname} {lastname}
      </p>
      <p htmlFor="city">City: {city}</p>
      <p htmlFor="state">State: {state}</p>
      <p htmlFor="country">Country: {country}</p>
    </div>
  );
};

export default Athlete;

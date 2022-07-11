import React, { useState, useEffect } from "react";
import Athlete from "./Athlete";

function App() {
  const [, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});

  //Strava Credentials
  let clientID = "87760";
  let clientSecret = "c1902065f114f7fc616ebce6151c833699407803";

  // refresh token and call address
  const refreshToken = "c248d263f6ef4cab61eb1c2e19b9eee6a21eb03c";
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete?access_token=`;

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, [callRefresh]);

  // use current access token to call all activities
  function getActivities(access) {
    // console.log(callActivities + access)
    fetch(callActivities + access)
      .then((res) => res.json())
      .then(
        (data) => setActivities(data),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e));
  }

  return (
    <div className="App">
      <Athlete activities={activities} />
    </div>
  );
}

export default App;

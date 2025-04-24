import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data= useLoaderData();

      // fetch API Two Methods
      // Method 1
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/waheed-malik")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

// OR
// Method 2
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  );
}

export default Github

export const githubInfoLoader=async()=> {
   const response = await fetch('https://api.github.com/users/waheed-malik')
return response.json()
}

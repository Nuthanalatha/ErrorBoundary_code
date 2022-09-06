import React, { useState } from "react";

function PersonDetails() {
  const [person, setPerson] = useState({
    userName: "Ram",
    age: 20,
  });
  return <div>{person.userName}</div>; //filter(),map() are errors
}

export default PersonDetails;

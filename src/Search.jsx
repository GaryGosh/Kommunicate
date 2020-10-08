import React from "react";

function Search({ user }) {

  const searchUSer = (e) => {
    /* console.log(e.target.value); */
    let val = e.target.value;
    return user.map((user) => (
        user.first_name === val
    ))
  };
  
  return (
    <div>
      <input type="text" placeholder="Search user" onChange={searchUSer} />
    </div>
  );
}

export default Search;

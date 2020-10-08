import React, { useState } from "react";

function Search({ user }) {
  const[filteredItem, setFilteredItem] = useState([]);
  const searchUSer = (e) => {
    /* console.log(e.target.value); */
    let val = e.target.value;
    let filterData = user.filter((user) => (
      user.first_name.toLowerCase().includes(val.toLowerCase())
    ));
    setFilteredItem(filterData)
  };
  console.log('filter', filteredItem);
  return (
    <div>
      <input type="text" placeholder="Search user" onChange={searchUSer} />
      {filteredItem?.map(({avatar, id, first_name, last_name, email}) => (
                <tr>
                    <td><img src={avatar} alt="user dp"/></td>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                </tr>
            ) )}
    </div>
  );
}

export default Search;

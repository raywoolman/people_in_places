import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ray",
      image:
        "https://cdn.pixabay.com/photo/2019/08/26/06/40/table-mountain-4430922_960_720.jpg",
        places: 5
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

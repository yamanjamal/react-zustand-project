import React ,{useState, useEffect} from "react";
import useStore from "../store/useStore";

const Users = () => {

  // const [users, setUsers] = useState([])

  // const fetchUsersData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     setUsers( await res.json());
  // }

  // React.useEffect(() => {
  //   fetchUsersData();
  // }, [fetchUsersData]);

  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const addToFriends = useStore((state) => state.addToFriends);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => addToFriends(user)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default Users;

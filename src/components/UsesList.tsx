import React, { useEffect, useState } from "react";
import { User } from "../interfaces/User";
import instance from "../api";

const UsesList = () => {
  const [users, setUsers] = useState<User[]>([]); // State lưu trữ danh sách user

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/users");
        setUsers(data.data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu người dùng:", error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsesList;

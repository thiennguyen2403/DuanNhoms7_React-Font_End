import React, { useEffect, useState } from "react";
import { User } from "../interfaces/User";
import instance from "../api";

const UsesList = () => {
  const [users, setUsers] = useState<User[]>([]); // State to store users list

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/users");
        console.log("Dữ liệu từ API:", data);
        if (Array.isArray(data.user)) {
          setUsers(data.user);
        } else {
          console.error("Dữ liệu không phải là một mảng:", data.user);
        }
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu người dùng:", error);
      }
    })();
  }, []);

  const handleLockUser = async (userId: string | undefined) => {
    if (!userId) {
      console.error("ID người dùng không hợp lệ");
      return;
    }
    try {
      const response = await instance.post(`/users/${userId}/lock`);
      if (response.data.success) {
        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, isActive: false } : user
          )
        );
      } else {
        console.error("Không thể khóa người dùng:", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi khi khóa người dùng:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Danh sách người dùng</h2>
      {users.length === 0 ? (
        <p className="text-center text-muted">Không có người dùng nào.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Email Người Dùng</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleLockUser(user.id)}
                  >
                    Khóa Người Dùng
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsesList;

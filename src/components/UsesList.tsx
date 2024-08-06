import React, { useEffect, useState } from "react";
import { User } from "../interfaces/User";
import instance from "../api";

const UsersList = () => {
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
      console.log(`Gửi yêu cầu khóa người dùng với ID: ${userId}`);
      const response = await instance.post(`/users/${userId}/lock`);
      console.log("Phản hồi từ API khóa:", response.data);
      if (response.data.success) {
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, isActive: false } : user
          )
        );
      } else {
        console.error("Không thể khóa người dùng:", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi khi khóa người dùng:", error);
    }
  };

  const handleUnlockUser = async (userId: string | undefined) => {
    if (!userId) {
      console.error("ID người dùng không hợp lệ");
      return;
    }
    try {
      console.log(`Gửi yêu cầu mở khóa người dùng với ID: ${userId}`);
      const response = await instance.post(`/users/${userId}/unlock`);
      console.log("Phản hồi từ API mở khóa:", response.data);
      if (response.data.success) {
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, isActive: true } : user
          )
        );
      } else {
        console.error("Không thể mở khóa người dùng:", response.data.message);
      }
    } catch (error) {
      console.error("Lỗi khi mở khóa người dùng:", error);
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
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.isActive ? "Hoạt Động" : "Đã Khóa"}</td>
                <td>
                  {user.isActive ? (
                    <button
                      className="btn btn-warning"
                      onClick={() => handleLockUser(user._id)}
                    >
                      Khóa Người Dùng
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => handleUnlockUser(user._id)}
                    >
                      Mở Khóa Người Dùng
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersList;
